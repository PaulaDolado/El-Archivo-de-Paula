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
    cover: "https://m.media-amazon.com/images/I/81JIVOPeWoL._SY466_.jpg", 
    saga: "Duologia de Seis de Cuervos #1", 
    description: "Ketterdam: Un desbordante foco de comercio internacional donde todo se puede conseguir por el precio adecuado, como bien sabe el prodigio criminal Kaz Brekker. A Kaz le acaban de ofrecer la oportunidad de llevar a cabo un gran robo, un arriesgado golpe que podría hacerle más rico de lo que jamás se ha atrevido a imaginar en sus sueños más salvajes. Pero no podrá llevarlo a cabo por sí solo: tendrá que reclutar a un peculiar equipo formado por un convicto, una espía, un pistolero, una Grisha, un ladrón y un fugitivo.Aunque ellos no lo saben, llegado el momento los miembros del grupo de Kaz serán los únicos capaces de salvar el mundo de la aniquilación total. Bueno, lo serán si no se matan entre ellos primero.", 
    year: 2016,
    genre: "Fantasía, Literatura juvenil",
    epubUrl: "/files/nombre-del-viento.epub", /*CREAR REPO */
    pdfUrl: "/files/nombre-del-viento.pdf",
    onlineUrl: "",
  },
  {
    id: "2",
    title: "Reino de Ladrones",
    author: "Leigh Bardugo",
    cover: "https://m.media-amazon.com/images/I/51vSvGVA3LL._SY445_SX342_ControlCacheEqualizer_.jpg", 
    saga: "Duologia de Seis de Cuervos #2", 
    description: "Kaz Brekker y su equipo han dado un golpe tan temerario que ni siquiera ellos pensaban sobrevivir. Pero en lugar de conseguir una buena recompensa, a su regreso de la Corte de Hielo tienen que seguir luchando por sus vidas. Traicionado y debilitado, el equipo está corto de recursos, aliados y esperanza. Mientras poderosas fuerzas de todo el mundo llegan a Ketterdam para desentrañar el secreto de la peligrosa droga conocida como jurda parem, viejos rivales y nuevos enemigos emergen para desafiar el ingenio de Kaz y poner a prueba las frágiles lealtades del equipo. Una guerra se adueñará de las oscuras y tortuosas calles de la ciudad, una batalla por la venganza y la redención que decidirá el destino del mundo Grisha.", 
    year: 2021,
    genre: "Fantasía, Literatura juvenil",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "3",
    title: "Nevernight",
    author: "Jay Kristoff",
    cover: "https://m.media-amazon.com/images/I/51SyFd0u2HL._SY445_SX342_ControlCacheEqualizer_.jpg", 
    saga: "The Nevernight Chtonicle #1", 
    description: "Nunca te encojas. Nunca temas. Y nunca, jamás, olvides.En una tierra de tres soles que nunca dan paso a la oscuridad, la joven asesina Mia Corvere acaba de unirse a la banda más mortífera de la República.De niña, Mia sobrevivió sola y a duras penas tras la rebelión fallida de su padre, que murió ejecutado por traición. Pero su misterioso don para conversar con las sombras la llevó por un camino más siniestro de lo que jamás hubiera podido imaginar. Ahora, años más tarde, debe demostrar su valía en la Iglesia Roja. Los pasillos de esta escuela de asesinos están llenos de traiciones y, para llegar a ser la adversaria que desea, Mia tiene que sobrevivir a la iniciación.Si lo logra, estará un paso más cerca de su único objetivo: venganza.", 
    year: 2021,
    genre: "Fantasía",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "4",
    title: "",
    author: "Jay Kristoff",
    cover: "https://m.media-amazon.com/images/I/51gOXFtGDCL._SY445_SX342_ControlCacheEqualizer_.jpg",
    saga: "The Nevernight Chtonicle #2", 
    description: "Segunda entrega de la trilogía Crónicas de la Nuncanoche.Quédate con la gloria. Yo me quedaré con la sangre.En una tierra de tres soles que nunca dan paso a la oscuridad, Mia Corvere ha encontrado su lugar en la Iglesia Roja, la famosa escuela de asesinos. Sin embargo, aún no ha podido llevar a cabo su venganza. Cuando sospecha que la propia Iglesia está impidiendo que acabe con el hombre que mató a su familia, se vende a sí misma a un reclutador de gladiadores para poder enfrentarse a él.En los pasillos del coliseo hace nuevas amistades y nuevos rivales, y empieza a preguntarse por su afinidad con las sombras. Pero a medida que se urden conspiraciones y comienza el recuento de cuerpos, Mia se ve obligada a tomar una decisión con graves consecuencias: lealtad o venganza.", 
    year: 2021,
    genre: "Fantasía",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
  },
  {
    id: "5",
    title: "DarkDawn",
    author: "Jay Kristoff",
    cover: "https://pictures.abebooks.com/isbn/9780008180096-es.jpg", 
    saga: "The Nevernight Chtonicle #3", 
    description: "Tercera entrega de la trilogía Crónicas de la Nuncanoche Soy la guerra que no puedes ganar. En la arena de los juegos más sangrientos de Tumba de Dioses se produjeron los asesinatos más impactantes de la República Itreyana. Mia Corvere consiguió huir con un compañero inesperado, aunque ahora los persiguen las hojas de la Iglesia Roja y los Luminatii... Y puede que también siga su rastro algo o alguien que ha traspasado el velo de la muerte. Más allá de abandonar con vida la Ciudad de los Puentes y los Huesos, Mia espera resolver por fin el enigma de su identidad como tenebra y otro más que ha surgido por el camino: ¿es posible acabar con un monstruo sin convertirse en uno al mismo tiempo? La canción está a punto de entonarse, pequeños mortales, y recordad: en un mundo donde incluso la luz solar está condenada a morir, nunca añoras tu sombra hasta que te pierdes en la oscuridad.", 
    year: 2021,
    genre: "Fantasía",
    epubUrl: "",
    pdfUrl: "",
    onlineUrl: "",
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
