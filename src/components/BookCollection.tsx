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
        backgroundImage: `url(${collectionBg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <span className="font-display text-sm tracking-[0.4em] text-muted-foreground uppercase">
            Mi Colección
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </div>
        <p className="text-center font-body text-lg text-muted-foreground italic">
          "Un libro es un sueño que tienes en tus manos"
        </p>
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
