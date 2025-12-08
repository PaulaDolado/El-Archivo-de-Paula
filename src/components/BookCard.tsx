import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Download, BookOpen, FileText, File } from "lucide-react";


interface Book {
  id: string;
  title: string;
  author: string;
  cover: string; 
  year?: number;
  genre?: string;
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

  // Generate a unique color based on book id for variety
  const colors = [
    "from-leather to-leather-light",
    "from-amber-900 to-amber-800",
    "from-emerald-900 to-emerald-800",
    "from-rose-900 to-rose-800",
    "from-indigo-900 to-indigo-800",
    "from-slate-800 to-slate-700",
  ];
  const colorIndex = parseInt(book.id) % colors.length;
  const spineColor = colors[colorIndex];

  const handleDownload = (type: 'epub' | 'pdf' | 'online') => {
    // Placeholder URLs - in a real app, these would be actual file URLs
    const urls = {
      epub: book.epubUrl || `#download-epub-${book.id}`,
      pdf: book.pdfUrl || `#download-pdf-${book.id}`,
      online: book.onlineUrl || `#read-online-${book.id}`,
    };

    if (type === 'online') {
      window.open(urls.online, '_blank');
    } else {
      // In a real implementation, this would trigger a download
      const link = document.createElement('a');
      link.href = urls[type];
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
        {/* Book Container - EL COMPONENTE DE LA COLECCIÓN HA SIDO REEMPLAZADO */}
        <div className="relative aspect-[3/4]">
          
          {/* Cover Image - NUEVA ESTRUCTURA */}
          <img
            src={book.cover}
            alt={`Portada de ${book.title}`}
            className="w-full h-full object-cover rounded-md shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
          />

        </div>
        
        {/* Información del libro debajo de la portada */}
        <div className="mt-2 text-center">
            {/* Título */}
            <h3 className="text-sm font-semibold leading-tight text-foreground line-clamp-2">
                {book.title}
            </h3>
            {/* Autor */}
            <p className="text-xs text-muted-foreground italic mt-0.5">
                {book.author}
            </p>
            {/* Saga (Solo si existe) */}
            {book.saga && (
                <p className="text-xs text-gold/80 mt-0.5">
                    Saga: {book.saga}
                </p>
            )}
        </div>
      </div>
      
      {/* Download Dialog - EL DIALOGO DE DETALLE HA SIDO MODIFICADO */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl bg-paper border-gold/30">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-foreground text-center">
              {book.title}
            </DialogTitle>
            <p className="font-body text-md text-muted-foreground text-center italic mb-4">
              {book.author} 
              {book.saga && <span className="text-gold/80 ml-2"> (Saga: {book.saga})</span>}
            </p>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Columna 1: Portada */}
            <div className="md:col-span-1 flex justify-center">
              <img
                src={book.cover}
                alt={`Portada de ${book.title}`}
                className="w-full max-w-xs aspect-[3/4] object-cover rounded-md shadow-xl"
              />
            </div>

            {/* Columna 2: Descripción y Botones */}
            <div className="md:col-span-2 flex flex-col justify-between">
                <div>
                    <h4 className="font-display text-lg text-gold mb-2">Sinopsis</h4>
                    <p className="font-body text-sm text-foreground/90 mb-6">
                        {book.description || "No hay una descripción disponible para este libro."}
                    </p>
                    
                    {/* Detalles adicionales */}
                    <div className="flex gap-4 text-xs text-muted-foreground">
                        {book.year && <span>Año: {book.year}</span>}
                        {book.genre && <span>Género: {book.genre}</span>}
                    </div>

                    <div className="w-full h-px bg-gold/20 my-4" />
                </div>

                {/* Botones de Descarga/Lectura */}
                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 py-6 border-gold/30 hover:bg-gold/10 hover:border-gold/50"
                    onClick={() => handleDownload('epub')}
                    disabled={!book.epubUrl}
                  >
                    <File className="w-5 h-5 text-gold" />
                    <div className="flex flex-col items-start">
                      <span className="font-display text-sm">Descargar EPUB</span>
                      <span className="font-body text-xs text-muted-foreground">Formato para e-readers</span>
                    </div>
                    <Download className="w-4 h-4 ml-auto text-muted-foreground" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 py-6 border-gold/30 hover:bg-gold/10 hover:border-gold/50"
                    onClick={() => handleDownload('pdf')}
                    disabled={!book.pdfUrl}
                  >
                    <FileText className="w-5 h-5 text-gold" />
                    <div className="flex flex-col items-start">
                      <span className="font-display text-sm">Descargar PDF</span>
                      <span className="font-body text-xs text-muted-foreground">Formato universal</span>
                    </div>
                    <Download className="w-4 h-4 ml-auto text-muted-foreground" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 py-6 border-gold/30 hover:bg-gold/10 hover:border-gold/50"
                    onClick={() => handleDownload('online')}
                    disabled={!book.onlineUrl}
                  >
                    <BookOpen className="w-5 h-5 text-gold" />
                    <div className="flex flex-col items-start">
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