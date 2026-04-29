import { cn } from "@/lib/utils";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Download, BookOpen, FileText, File } from "lucide-react";
import { useSearchParams } from "react-router-dom"; // Importante para el filtrado

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

  const darkGreen = '#3e5732ff';
  const darkRed = '#6d0414ff';

  // Función para filtrar por género
  const handleGenreClick = (e: React.MouseEvent, genre: string) => {
    e.stopPropagation(); // Evita que el clic se propague al abrir el diálogo
    searchParams.set("genre", genre);
    setSearchParams(searchParams);
    setIsDialogOpen(false); // Cerramos el modal al filtrar
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
          "group relative cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2",
          className
        )}
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="relative aspect-[3/4]">
          <img
            src={book.cover}
            alt={`Portada de ${book.title}`}
            className="w-full h-full object-contain rounded-md shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
          />
        </div>

        <div className="mt-2 text-center">
          <h3 className="text-sm font-semibold leading-tight text-foreground line-clamp-2">
            {book.title}
          </h3>
          <p className="text-sm italic mt-0.5">{book.author}</p>
          {book.saga && (
            <p className="text-sm mt-0.5" style={{ color: darkGreen }}>
              {book.saga}
            </p>
          )}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className={cn(
            "sm:max-w-5xl w-full bg-paper border-gold/30 flex flex-col p-4 md:p-8 overflow-y-auto md:overflow-y-hidden h-[100dvh] md:h-[600px]"
          )}
        >
          <DialogHeader className="shrink-0">
            <DialogTitle className="font-display text-2xl text-foreground text-center">
              {book.title}
            </DialogTitle>
            <div className="font-body text-md text-center italic mb-4" style={{ color: darkRed }}>
              {book.author}
              {book.saga && (
                <span className="ml-2" style={{ color: darkGreen }}>
                  (Saga: {book.saga})
                </span>
              )}
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 flex justify-center items-start mb-4 md:mb-0">
              <img
                src={book.cover}
                alt={`Portada de ${book.title}`}
                className="w-full max-w-xs aspect-[3/4] object-cover rounded-md shadow-xl max-h-[400px]"
              />
            </div>

            <div className="md:col-span-2 flex flex-col flex-1 overflow-hidden">
              <div className="flex flex-col gap-3 shrink-0">
                <h4 className="font-display text-lg mb-2 shrink-0" style={{ color: darkRed }}>
                  Sinopsis
                </h4>
                <div className="h-[200px] overflow-y-auto pr-4 mb-4 border border-transparent rounded-sm">
                  <p className="font-body text-base text-foreground/90 whitespace-pre-line" style={{ textAlign: "justify" }}>
                    {book.description || "No hay una descripción disponible para este libro."}
                  </p>
                </div>

                {/* Detalles con etiquetas clickeables */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground shrink-0">
                  {book.year && <span>Año: {book.year}</span>}
                  
                  {book.genre && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span>Género:</span>
                      {book.genre.map((g) => (
                        <button
                          key={g}
                          onClick={(e) => handleGenreClick(e, g)}
                          className="px-2 py-0.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] uppercase font-medium hover:bg-gold hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="w-full h-px bg-gold/20 my-4 shrink-0" />
              </div>

              <div className="flex flex-col gap-3 mt-2 md:mt-0">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 py-4 border-gold/30 hover:bg-gold/10"
                  onClick={() => handleDownload('epub')}
                  disabled={!book.epubUrl}
                >
                  <File className="w-5 h-5 text-gold" />
                  <div className="flex flex-col items-start text-left">
                    <span className="font-display text-sm">Descargar EPUB</span>
                    <span className="font-body text-xs text-muted-foreground">Formato para e-readers</span>
                  </div>
                  <Download className="w-4 h-4 ml-auto text-muted-foreground" />
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 py-4 border-gold/30 hover:bg-gold/10"
                  onClick={() => handleDownload('pdf')}
                  disabled={!book.pdfUrl}
                >
                  <FileText className="w-5 h-5 text-gold" />
                  <div className="flex flex-col items-start text-left">
                    <span className="font-display text-sm">Descargar PDF</span>
                    <span className="font-body text-xs text-muted-foreground">Formato universal</span>
                  </div>
                  <Download className="w-4 h-4 ml-auto text-muted-foreground" />
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 py-4 border-gold/30 hover:bg-gold/10"
                  onClick={() => handleDownload('online')}
                  disabled={!book.onlineUrl}
                >
                  <BookOpen className="w-5 h-5 text-gold" />
                  <div className="flex flex-col items-start text-left">
                    <span className="font-display text-sm">Leer Online</span>
                    <span className="font-body text-xs text-muted-foreground">Abrir en nueva pestaña</span>
                  </div>
                  <BookOpen className="w-4 h-4 ml-auto text-muted-foreground" />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookCard;