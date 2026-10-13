import { cn } from "@/lib/utils";
import BookCard from "./BookCard";
import { books } from "@/data/books";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import collectionBg from "@/assets/collection-bg.jpeg";

interface BookCollectionProps {
  className?: string;
  searchQuery?: string;
}

const BookCollection = ({ className, searchQuery: incomingQuery }: BookCollectionProps) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const SearchQuery = incomingQuery ?? params.get("q") ?? "";
  const genreParam = params.get("genre") ?? "";

  const normalize = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); //quita accentos

  const selectedGenres = useMemo(() => {
    return genreParam
      ? genreParam.split(",").map((g) => normalize(g))
      : [];
  }, [genreParam]);

  // Géneros únicos (sin distinguir tildes ni mayúsculas) con su nº de libros,
  // ordenados de más a menos libros
  const genres = useMemo(() => {
    const byKey = new Map<string, { label: string; count: number }>();

    books.forEach((book) => {
      const seen = new Set<string>();

      (book.genre || []).forEach((label) => {
        const key = normalize(label);
        if (seen.has(key)) return;
        seen.add(key);

        const entry = byKey.get(key);
        if (entry) entry.count++;
        else byKey.set(key, { label, count: 1 });
      });
    });

    return Array.from(byKey, ([key, value]) => ({ key, ...value })).sort(
      (a, b) => b.count - a.count || a.label.localeCompare(b.label, "es")
    );
  }, []);

  const updateGenres = (updated: string[]) => {
    const params = new URLSearchParams();

    if (SearchQuery) params.set("q", SearchQuery);
    if (updated.length > 0) params.set("genre", updated.join(","));

    navigate(`?${params.toString()}`);
  };

  const toggleGenre = (key: string) => {
    updateGenres(
      selectedGenres.includes(key)
        ? selectedGenres.filter((g) => g !== key)
        : [...selectedGenres, key]
    );
  };

  // Flechas y degradados del carrusel de géneros
  const genreScrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });

  useEffect(() => {
    const el = genreScrollRef.current;
    if (!el) return;

    const update = () =>
      setCanScroll({
        left: el.scrollLeft > 4,
        right: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
      });

    update();
    document.fonts?.ready.then(update);
    const observer = new ResizeObserver(update);
    observer.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, []);

  const scrollGenres = (direction: 1 | -1) => {
    const el = genreScrollRef.current;
    el?.scrollBy({ left: direction * el.clientWidth * 0.7, behavior: "smooth" });
  };

  const genreFadeMask = `linear-gradient(to right, transparent 0, #000 ${canScroll.left ? 48 : 0}px, #000 calc(100% - ${canScroll.right ? 48 : 0}px), transparent 100%)`;

  const chipClass = (isActive: boolean) =>
    cn(
      "inline-flex items-center gap-1.5 shrink-0 px-4 py-1.5 rounded-full border font-body text-base font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
      isActive
        ? "bg-primary text-primary-foreground border-primary shadow-md"
        : "bg-[#f5ecd9]/90 text-primary border-primary/20 hover:bg-[#fffaf0] hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-sm"
    );

  const countClass = (isActive: boolean) =>
    cn(
      "min-w-[1.5rem] px-1.5 rounded-full text-xs font-body leading-5 text-center",
      isActive ? "bg-white/20" : "bg-primary/10 text-primary/80"
    );

  // 🔍 Filtro final
  const filteredBooks = useMemo(() => {
    const query = SearchQuery.toLowerCase().trim();

    return books.filter((book) => {
      const matchesSearch =
        !query ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query);

      const matchesGenre =
        selectedGenres.length === 0 ||
        (book.genre &&
          book.genre.some((g) =>
            selectedGenres.includes(normalize(g))
          ));

      return matchesSearch && matchesGenre;
    });
  }, [SearchQuery, selectedGenres]);

  // Textura de papel/papiro: grano fino + fibras horizontales
  const paperTexture = `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
      <filter id='grano'>
        <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/>
        <feColorMatrix values='0 0 0 0 0.45  0 0 0 0 0.33  0 0 0 0 0.18  0 0 0 0.55 0'/>
      </filter>
      <filter id='fibras'>
        <feTurbulence type='fractalNoise' baseFrequency='0.012 0.35' numOctaves='2' stitchTiles='stitch'/>
        <feColorMatrix values='0 0 0 0 0.5  0 0 0 0 0.38  0 0 0 0 0.2  0 0 0 0.35 0'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#grano)' opacity='0.35'/>
      <rect width='100%' height='100%' filter='url(#fibras)' opacity='0.5'/>
    </svg>`
  )}")`;

  // Estilos CSS para el fondo de la CUADRÍCULA DE LIBROS (papel crema envejecido)
  const bookGridBackgroundStyle = {
    backgroundColor: "#ece0c4",
    backgroundImage: [
      paperTexture,
      "radial-gradient(ellipse at 20% 15%, rgba(255, 250, 235, 0.55), transparent 55%)",
      "radial-gradient(ellipse at 85% 80%, rgba(160, 120, 70, 0.18), transparent 60%)",
      "radial-gradient(ellipse at 70% 25%, rgba(180, 140, 85, 0.12), transparent 50%)",
    ].join(", "),
    boxShadow:
      "inset 0 0 60px rgba(120, 80, 40, 0.35), inset 0 0 12px rgba(100, 60, 30, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.45)",
    border: "1px solid rgba(109, 4, 20, 0.15)",
    position: "relative" as const,
  };

  return (
    <div className={cn("min-h-screen pt-28 pb-16 px-8 md:px-16 overflow-x-hidden", className)}
      // Este es el fondo GENERAL
      style={{
        backgroundImage: `url(${collectionBg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}>
      {/* Sección de Encabezado */}
      <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mb-3 ">
        <div className="absolute z-0 backdrop-blur-[2px] border-y border-white/5 w-screen pointer-events-none
              top-[-112px] bottom-[-20px]
              md:top-[-112px] md:bottom-[-15px]"
          style={{
            left: 0,
            right: 0,
            background: `linear-gradient(to right,
              transparent 0%,
              rgba(245, 230, 202, 0.4) 15%,
              rgba(245, 230, 202, 0.85) 50%,
              rgba(245, 230, 202, 0.4) 85%,
              transparent 100%
            )`
          }}
        />

        {/* Contenido centrado  */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-4 text-center">
          {/* Título Principal - Tamaño ajustado para ser más compacto */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-primary mb-2 animate-fade-in-up drop-shadow-sm">
            Mi Colección
          </h1>
          {/* Separador y Subtítulo */}
          <div className="flex items-center justify-center gap-4 max-w-3xl mx-auto">
            <div className="h-px flex-1 bg-primary/20" />
            <span className="font-display text-xs md:text-sm lg:text-base tracking-[0.3em] text-primary/70 uppercase font-medium whitespace-normal md:whitespace-nowrap">
              Descarga libros en PDF, EPUB o lee online
            </span>
            <div className="h-px flex-1 bg-primary/20" />
          </div>
        </div>
        {/* FILTRO genero */}
        <div className="relative z-20 max-w-7xl mx-auto pl-10 md:pl-14 pr-6 md:pr-10">
          <div className="flex items-center gap-2" role="group" aria-label="Filtrar por género">
            <button
              onClick={() => updateGenres([])}
              aria-pressed={selectedGenres.length === 0}
              className={chipClass(selectedGenres.length === 0)}
            >
              Todos
              <span className={countClass(selectedGenres.length === 0)}>{books.length}</span>
            </button>

            <div className="h-6 w-px shrink-0 bg-primary/25" />

            <div className="relative flex-1 min-w-0">
              {canScroll.left && (
                <button
                  onClick={() => scrollGenres(-1)}
                  aria-label="Ver géneros anteriores"
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 h-8 w-8 items-center justify-center rounded-full bg-[#f5ecd9] border border-primary/30 text-primary shadow-md hover:bg-white transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}

              <div
                ref={genreScrollRef}
                className="flex gap-2 overflow-x-auto py-2 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ maskImage: genreFadeMask, WebkitMaskImage: genreFadeMask }}
              >
                {genres.map(({ key, label, count }) => {
                  const isActive = selectedGenres.includes(key);

                  return (
                    <button
                      key={key}
                      onClick={() => toggleGenre(key)}
                      aria-pressed={isActive}
                      className={chipClass(isActive)}
                    >
                      {isActive && <Check className="h-3.5 w-3.5" />}
                      {label}
                      <span className={countClass(isActive)}>{count}</span>
                    </button>
                  );
                })}
              </div>

              {canScroll.right && (
                <button
                  onClick={() => scrollGenres(1)}
                  aria-label="Ver más géneros"
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 h-8 w-8 items-center justify-center rounded-full bg-[#f5ecd9] border border-primary/30 text-primary shadow-md hover:bg-white transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {selectedGenres.length > 0 && (
            <div className="flex justify-center">
              <button
                onClick={() => updateGenres([])}
                className="inline-flex items-center gap-1 font-body text-sm italic text-primary/80 hover:text-primary underline-offset-4 hover:underline"
              >
                <X className="h-3.5 w-3.5" />
                Quitar filtros ({selectedGenres.length}) · {filteredBooks.length}{" "}
                {filteredBooks.length === 1 ? "libro" : "libros"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* --- INICIO:  Contenedor para la img Fondo  --- */}
      <div
        className="max-w-7xl mx-auto rounded-xl shadow-2xl p-6"
        style={bookGridBackgroundStyle}
      >
        {/* Books Grid  */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <div
                key={book.id}
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
                <BookCard book={book} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12" style={{ color: "rgb(109, 12, 25)" }}>
              <p className="font-body text-lg italic">
                No se encontraron libros que coincidan con tu búsqueda
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer decoration */}
      <div className="max-w-6xl mx-auto mt-16 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-px bg-[#6d0414]/40" />
          <div className="w-2 h-2 rotate-45 bg-[#6d0414]/60" />
          <div className="w-12 h-px bg-[#6d0414]/40" />
        </div>
      </div>

      {/* Footer links */}
      <div className="w-fit mx-auto mt-6 mb-8 px-6 py-3 rounded-xl bg-[#f5ecd9]/95 border border-[#6d0414]/20 shadow-lg flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-body text-base italic">
        <a
          href="https://github.com/PaulaDolado?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6d0414] underline-offset-4 hover:underline transition-colors"
        >
          Ver más proyectos propios
        </a>
        <div className="hidden sm:block w-1.5 h-1.5 rotate-45 bg-[#6d0414]/60" />
        <a
          href="https://pauladolado.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6d0414] underline-offset-4 hover:underline transition-colors"
        >
          Saber más de mí
        </a>
      </div>
    </div>
  );
};

export default BookCollection;
