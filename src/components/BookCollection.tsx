import { cn } from "@/lib/utils";
import BookCard from "./BookCard";
import { Book } from "@/interfaces/book";
import { useMemo } from "react";
import collectionBg from "@/assets/collection-bg.jpeg";

interface BookCollectionProps {
  className?: string;
  searchQuery?: string;
}

const sampleBooks: Book[] = [
  {
    id: "1",
    title: "Seis de Cuervos",
    author: "Leigh Bardugo",
    cover: "https://www.amazon.es/Seis-cuervos-Grisha-Leigh-Bardugo/dp/8416387583", // Reemplaza con una URL real
    saga: "Duologia de Seis de Cuervos", 
    description: "Ketterdam: Un desbordante foco de comercio internacional donde todo se puede conseguir por el precio adecuado, como bien sabe el prodigio criminal Kaz Brekker. A Kaz le acaban de ofrecer la oportunidad de llevar a cabo un gran robo, un arriesgado golpe que podría hacerle más rico de lo que jamás se ha atrevido a imaginar en sus sueños más salvajes. Pero no podrá llevarlo a cabo por sí solo: tendrá que reclutar a un peculiar equipo formado por un convicto, una espía, un pistolero, una Grisha, un ladrón y un fugitivo.Aunque ellos no lo saben, llegado el momento los miembros del grupo de Kaz serán los únicos capaces de salvar el mundo de la aniquilación total. Bueno, lo serán si no se matan entre ellos primero.", 
    year: 2021,
    genre: "Fantasía, Literatura juvenil",
    epubUrl: "/files/nombre-del-viento.epub",
    pdfUrl: "/files/nombre-del-viento.pdf",
    onlineUrl: "https://lectura-online.com/nombre-del-viento",
  },
  {
    id: "2",
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    cover: "/src/assets/covers/reino-de-ladrones.jpg  ",
    genre: "Novela"
  },
  {
    id: "3",
    title: "La Casa de los Espíritus",
    author: "Isabel Allende",
    cover: "",
    genre: "Realismo Mágico"
  },
  {
    id: "4",
    title: "Rayuela",
    author: "Julio Cortázar",
    cover: "",
    genre: "Novela Experimental"
  },
  {
    id: "5",
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    cover: "",
    genre: "Realismo Mágico"
  },
  {
    id: "6",
    title: "Ficciones",
    author: "Jorge Luis Borges",
    cover: "",
    genre: "Cuentos"
  },
    {
    id: "7",
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    cover: "",
    genre: "Realismo Mágico"
  },
  {
    id: "8",
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    cover: "",
    year: 1605,
    genre: "Novela"
  },
  {
    id: "9",
    title: "La Casa de los Espíritus",
    author: "Isabel Allende",
    cover: "",
    genre: "Realismo Mágico"
  },
  {
    id: "10",
    title: "Rayuela",
    author: "Julio Cortázar",
    cover: "",
    genre: "Novela Experimental"
  },
  {
    id: "11",
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    cover: "",
    genre: "Realismo Mágico"
  },
  {
    id: "12",
    title: "Ficciones",
    author: "Jorge Luis Borges",
    cover: "",
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
