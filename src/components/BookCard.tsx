import { cn } from "@/lib/utils";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Download, BookOpen, FileText, File } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  year?: number;
  genre?: string[];
  saga?: string;
  description?: string;
  epubUrl?: string;
  pdfUrl?: string;
  onlineUrl?: string;
}

interface BookCardProps {
  book: Book;
  className?: string;
}

const BookCard = ({ book, className }: BookCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // Colores corporativos definidos en tu código original
  const darkGreen = '#3e5732ff';
  const darkRed = '#6d0414ff';

  // Función para filtrar por género al hacer clic en una etiqueta
  const handleGenreClick = (e: React.MouseEvent, genre: string) => {
    e.stopPropagation(); // Evita que se disparen eventos del contenedor padre
    searchParams.set("genre", genre);
    setSearchParams(searchParams);
    setIsDialogOpen(false); // Cerramos el modal para mostrar los resultados filtrados
  };

  const handleDownload = (type: 'epub' | 'pdf' | 'online') => {
    const urls = {
      epub: book.epubUrl || `#download-epub-${book.id}`,
      pdf: book.pdfUrl || `#download-pdf-${book.id}`,
      online: book.onlineUrl || `#read-online-${book.id}`,
    };

    if (type === 'online') {
      window.open(urls.online, '_blank');
    } else {
      const link = document.createElement('a');
      link.href = urls[type] as string;
      link.download = `${book.title}.${type}`;
      link.click();
    }
    setIsDialogOpen(false);
  };

  return (
    <>
      <div
        className={cn(
          "group relative cursor-pointer",
          "transition-all duration-500 ease-out",
          "hover:-translate-y-2",
          className
        )}
        onClick={() => setIsDialogOpen(true)}
      >
        {/* Contenedor de la Portada */}
        <div className="relative aspect-[3/4]">
          <img
            src={book.cover}
            alt={`Portada de ${book.title}`}
            className="w-full h-full object-contain rounded-md shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
          />
        </div>

        {/* Información rápida debajo de la portada */}
        <div className="mt-2 text-center">
          <h3 className="text-sm font-semibold leading-tight text-foreground line-clamp-2">
            {book.title}
          </h3>
          <p className="text-sm italic mt-0.5 text-muted-foreground">
            {book.author}
          </p>
          {book.saga && (
            <p className="text-[11px] mt-0.5 font-medium" style={{ color: darkGreen }}>
              {book.saga}
            </p>
          )}
          
          {/* Pequeñas etiquetas visuales en la miniatura */}
          <div className="flex flex-wrap justify-center gap-1 mt-2">
            {book.genre?.slice(0, 2).map((g) => (
              <span 
                key={g} 
                className="text-[9px] uppercase tracking-wider bg-secondary/50 px-1.5 py-0.5 rounded text-muted-foreground"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Detalle y Descarga */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className={cn(
            "sm:max-w-5xl w-full bg-paper border-gold/30 flex flex-col p-4 md:p-8",
            "overflow-y-auto md:overflow-y-hidden",
            "h-[100dvh] md:h-[600px]"
          )}
        >
          <DialogHeader className="shrink-0">
            <DialogTitle className="font-display text-2xl text-foreground text-center">
              {book.title}
            </DialogTitle>
            <div className="font-body text-md text-center italic mb-4">
              <span style={{ color: darkRed }}>{book.author}</span>
              {book.saga && (
                <span className="ml-2" style={{ color: darkGreen }}>
                  (Saga: {book.saga})
                </span>
              )}
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Columna 1: Portada grande */}
            <div className="md:col-span-1 flex justify-center items-start mb-4 md:mb-0">
              <img
                src={book.cover}
                alt={`Portada de ${book.title}`}
                className="w-full max-w-xs aspect-[3/4] object-cover rounded-md shadow-xl max-h-[400px]"
              />
            </div>

            {/* Columna 2: Sinopsis, Etiquetas y Descargas */}
            <div className="md:col-span-2 flex flex-col flex-1 overflow-hidden">
              <div className="flex flex-col gap-3 shrink-0">
                <h4 className="font-display text-lg mb-1 shrink-0" style={{ color: darkRed }}>
                  Sinopsis
                </h4>
                <div className="h-[180px] overflow-y-auto pr-4 mb-2 border border-transparent rounded-sm">
                  <p className="font-body text-base text-foreground/90 whitespace-pre-line" style={{ textAlign: "justify" }}>
                    {book.description || "No hay una descripción disponible para este libro."}
                  </p>
                </div>

                {/* GÉNEROS CONVERTIDOS EN ETIQUETAS FILTRABLES */}
                <div className="flex flex-wrap items-center gap-2 my-2">
                  <span className="text-xs font-bold text-muted-foreground uppercase">Géneros:</span>
                  {book.genre?.map((g) => (
                    <button
                      key={g}
                      onClick={(e) => handleGenreClick(e, g)}
                      className="text-[11px] px-3 py-1 bg-gold/10 border border-gold/30 rounded-full hover:bg-gold hover:text-white transition-all duration-200"
                    >
                      {g}
                    </button>
                  ))}
                </div>

                <div className="flex gap-4 text-xs text-muted-foreground shrink-0 font-medium">
                  {book.year && <span>AÑO DE PUBLICACIÓN: {book.year}</span>}
                </div>

                <div className="w-full h-px bg-gold/20 my-2 shrink-0" />
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col gap-3 mt-auto">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 py-6 border-gold/30 hover:bg-gold/10"
                  onClick={() => handleDownload('epub')}
                  disabled={!book.epubUrl}
                >
                  <File className="w-5 h-5 text-gold" />
                  <div className="flex flex-col items-start">
                    <span className="font-display text-sm font-bold">Descargar EPUB</span>
                    <span className="font-body text-xs text-muted-foreground">Ideal para libros electrónicos</span>
                  </div>
                  <Download className="w-4 h-4 ml-auto text-muted-foreground" />
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 py-6 border-gold/30 hover:bg-gold/10"
                  onClick={() => handleDownload('pdf')}
                  disabled={!book.pdfUrl}
                >
                  <FileText className="w-5 h-5 text-gold" />
                  <div className="flex flex-col items-start">
                    <span className="font-display text-sm font-bold">Descargar PDF</span>
                    <span className="font-body text-xs text-muted-foreground">Documento de lectura universal</span>
                  </div>
                  <Download className="w-4 h-4 ml-auto text-muted-foreground" />
                </Button>

                {book.onlineUrl && (
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 py-6 border-gold/30 hover:bg-gold/10"
                    onClick={() => handleDownload('online')}
                  >
                    <BookOpen className="w-5 h-5 text-gold" />
                    <div className="flex flex-col items-start">
                      <span className="font-display text-sm font-bold">Leer en Línea</span>
                      <span className="font-body text-xs text-muted-foreground">Abrir visor web</span>
                    </div>
                    <BookOpen className="w-4 h-4 ml-auto text-muted-foreground" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookCard;