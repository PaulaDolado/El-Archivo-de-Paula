import { cn } from "@/lib/utils";
import BookCard from "./BookCard";
import { books } from "@/data/books";
import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import collectionBg from "@/assets/collection-bg.jpeg";
import collectionBg2 from "@/assets/collection2-bg.jpeg";

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
      ? genreParam.split(",").map((g) => g.toLowerCase())
      : [];
  }, [genreParam]);

  const genres = useMemo(() => {
    return Array.from(
      new Set(books.flatMap((book) => book.genre || []))
    );
  }, []);

  const toggleGenre = (genre: string) => {
    const normalized = normalize(genre);

    let updated = [...selectedGenres];

    if (updated.includes(normalized)) {
      updated = updated.filter((g) => g !== normalized);
    } else {
      updated.push(normalized);
    }

    const params = new URLSearchParams();

    if (SearchQuery) params.set("q", SearchQuery);
    if (updated.length > 0) params.set("genre", updated.join(","));

    navigate(`?${params.toString()}`);
  };

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

  // Estilos CSS para el fondo de la CUADRÍCULA DE LIBROS (collectionBg2)
  const bookGridBackgroundStyle = {
    backgroundImage: `url(${collectionBg2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative" as const,
  };

  // El overlay para oscurecer la imagen del grid y hacer el texto legible
  const gridOverlayStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    zIndex: 1,
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
        <div className="relative z-20 max-w-7xl mx-auto px-2">
          <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2">

            <button
              onClick={() => navigate(SearchQuery ? `?q=${SearchQuery}` : "")}
              className={cn(
                "px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all",
                selectedGenres.length === 0
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-white/80 text-gray-700 hover:bg-white"
              )}
            >
              Todos
            </button>

            {genres.map((genre) => {
              const isActive = selectedGenres.includes(normalize(genre));

              return (
                <button
                  key={genre}
                  onClick={() => toggleGenre(genre)}
                  className={cn(
                    "relative z-20 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-200 border border-black/10",
                    isActive
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-white/80 text-gray-700 hover:bg-white hover:scale-105"
                  )}
                >
                  {genre}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- INICIO:  Contenedor para la img Fondo  --- */}
      <div
        className="max-w-7xl mx-auto rounded-xl shadow-2xl p-6"
        style={bookGridBackgroundStyle}
      >
        {/* Overlay sobre collectionBg2 para mejorar la legibilidad del texto del libro */}
        <div className="rounded-xl" style={gridOverlayStyle}></div>

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
    </div>
  );
};

export default BookCollection;
