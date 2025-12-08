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
        {/* Book Container */}
        <div className="relative aspect-[3/4] perspective-1000">
          {/* Book Spine */}
          <div className={cn(
            "absolute left-0 top-0 bottom-0 w-3",
            "bg-gradient-to-r",
            spineColor,
            "rounded-l-sm",
            "shadow-md",
            "transition-all duration-500",
            "group-hover:w-4"
          )}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            {/* Gold decoration on spine */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gold/60 rounded-full" />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gold/60 rounded-full" />
          </div>

          {/* Book Cover */}
          <div className={cn(
            "absolute left-2 top-0 right-0 bottom-0",
            "bg-gradient-to-br",
            spineColor,
            "rounded-r-sm rounded-l-none",
            "shadow-lg",
            "transition-all duration-500",
            "group-hover:shadow-2xl",
            "overflow-hidden"
          )}>
            {/* Cover texture overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_20%,_black_100%)]" />
            </div>

            {/* Gold frame */}
            <div className="absolute inset-2 border border-gold/40 rounded-sm">
              <div className="absolute inset-1 border border-gold/20 rounded-sm" />
            </div>

            {/* Book content */}
            <div className="relative h-full flex flex-col items-center justify-center p-3 text-center">
              {/* Genre badge */}
              {book.genre && (
                <span className="absolute top-4 text-[8px] tracking-[0.15em] uppercase text-gold/70 font-display">
                  {book.genre}
                </span>
              )}

              {/* Title */}
              <h3 className="font-display text-sm md:text-base leading-tight text-primary-foreground mb-2 tracking-wide">
                {book.title}
              </h3>

              {/* Decorative divider */}
              <div className="w-8 h-px bg-gold/60 mb-2" />

              {/* Author */}
              <p className="font-body text-xs italic text-primary-foreground/80">
                {book.author}
              </p>

              {/* Year */}
              {book.year && (
                <span className="absolute bottom-4 text-[10px] text-gold/60 font-display">
                  {book.year}
                </span>
              )}
            </div>

            {/* Hover glow effect */}
            <div className={cn(
              "absolute inset-0 opacity-0 transition-opacity duration-500",
              "bg-gradient-to-t from-gold/10 to-transparent",
              "group-hover:opacity-100"
            )} />
          </div>

          {/* Page edges */}
          <div className="absolute right-0 top-1 bottom-1 w-1 bg-gradient-to-r from-paper-dark to-paper rounded-r-sm" />
        </div>
      </div>

      {/* Download Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-paper border-gold/30">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-foreground text-center">
              {book.title}
            </DialogTitle>
            <p className="font-body text-sm text-muted-foreground text-center italic">
              {book.author}
            </p>
          </DialogHeader>
          
          <div className="flex flex-col gap-3 mt-4">
            <Button
              variant="outline"
              className="w-full justify-start gap-3 py-6 border-gold/30 hover:bg-gold/10 hover:border-gold/50"
              onClick={() => handleDownload('epub')}
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
            >
              <BookOpen className="w-5 h-5 text-gold" />
              <div className="flex flex-col items-start">
                <span className="font-display text-sm">Leer Online</span>
                <span className="font-body text-xs text-muted-foreground">Abrir en nueva pestaña</span>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookCard;
