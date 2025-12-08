import { cn } from "@/lib/utils";
import BookCard from "./BookCard";
import { useMemo } from "react";
import collectionBg from "@/assets/collection-bg.jpeg";

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  year?: number;
  genre?: string;
}

interface BookCollectionProps {
  className?: string;
  searchQuery?: string;
}

const sampleBooks: Book[] = [
  {
    id: "1",
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    cover: "",
    year: 1967,
    genre: "Realismo Mágico"
  },
  {
    id: "2",
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    cover: "",
    year: 1605,
    genre: "Novela"
  },
  {
    id: "3",
    title: "La Casa de los Espíritus",
    author: "Isabel Allende",
    cover: "",
    year: 1982,
    genre: "Realismo Mágico"
  },
  {
    id: "4",
    title: "Rayuela",
    author: "Julio Cortázar",
    cover: "",
    year: 1963,
    genre: "Novela Experimental"
  },
  {
    id: "5",
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    cover: "",
    year: 1955,
    genre: "Realismo Mágico"
  },
  {
    id: "6",
    title: "Ficciones",
    author: "Jorge Luis Borges",
    cover: "",
    year: 1944,
    genre: "Cuentos"
  },
];

const BookCollection = ({ className, searchQuery = "" }: BookCollectionProps) => {
  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return sampleBooks;
    
    const query = searchQuery.toLowerCase().trim();
    return sampleBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div 
      className={cn(
        "min-h-screen pt-28 pb-16 px-8 md:px-16",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(194, 174, 150, 0.95) 0%, rgba(194, 174, 150, 0.5) 30%, transparent 90%), url(${collectionBg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}
    >
{/* Sección de Encabezado con efecto de fondo traslúcido (Color #c2ae96) */}
      <div className="max-w-6xl mx-auto mb-16 text-center"> 
            {/* Título Principal */}
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-primary mb-6 animate-fade-in-up">
                Mi Colección
            </h1>

            {/* Separador y Subtítulo */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <span className="font-display text-xl tracking-[0.4em] text-primary uppercase">
                Descubre y descarga libros en PDF, EPUB o lee online.
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>
            
            {/* Cita 
            <p className="text-center font-body text-lg text-muted-foreground italic mt-6">
              "Un libro es un sueño que tienes en tus manos"
            </p>
            */}
            
      </div>

      {/* Books Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              key={book.id}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="font-body text-lg text-muted-foreground italic">
              No se encontraron libros que coincidan con tu búsqueda
            </p>
          </div>
        )}
      </div>

      {/* Footer decoration */}
      <div className="max-w-6xl mx-auto mt-16 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-px bg-gold/40" />
          <div className="w-2 h-2 rotate-45 bg-gold/60" />
          <div className="w-12 h-px bg-gold/40" />
        </div>
      </div>
    </div>
  );
};

export default BookCollection;
