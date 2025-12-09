import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import BookCollection from "./BookCollection";
import { ChevronRight, Search } from "lucide-react";
import { Input } from "./ui/input";
import headerBg from "@/assets/header-bg.png";

const PageTurnEffect = () => {
  const [isPageTurned, setIsPageTurned] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  //Nuevo estado para almacenar la consulta de búsqueda final
  const [submittedQuery, setSubmittedQuery] = useState("");

  const handlePageTurn = useCallback(() => {
    if (isAnimating || isPageTurned) return;
    
    setIsAnimating(true);
    setIsPageTurned(true);

    // Al pasar la página, actualiza la consulta enviada con lo que esté en el input
    setSubmittedQuery(searchQuery);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isAnimating, isPageTurned,searchQuery]);

  // **NUEVA FUNCIÓN:** Maneja la pulsación de Enter en el input de búsqueda
  const handleSearchSubmit = (e) => {
    // Verifica si se ha presionado la tecla 'Enter'
    if (e.key === 'Enter') {
      e.preventDefault(); // Previene cualquier acción por defecto del formulario (si existiera)
      // 1. Guarda la consulta de búsqueda actual
      setSubmittedQuery(searchQuery);
      // 2. "Pasa la página" para mostrar la colección
      handlePageTurn();
    }
  };

const handleGoBack = useCallback(() => {
    if (isAnimating) return;
    setIsPageTurned(false);
    // **Opcional:** Limpiar la consulta cuando se regresa a la portada
    setSubmittedQuery(""); 
    setSearchQuery(""); 
  }, [isAnimating]);

const handleCollectionSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      // No es necesario 'pasar la página', solo actualizar la consulta enviada.
      setSubmittedQuery(searchQuery);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#190301] ">
      {/* Book spine decoration on left */}
      <div className="fixed left-0 top-0 bottom-0 w-8 md:w-12 book-spine z-40">
        <div className="absolute inset-y-0 left-0 w-full flex flex-col items-center justify-center gap-8">
          <div className="w-1 h-16 book-spine-detail rounded-full" />
          <div className="w-1 h-24 book-spine-detail rounded-full" />
          <div className="w-1 h-16 book-spine-detail rounded-full" />
        </div>
      </div>

      {/* Landing Page (Cover) */}
      <div 
        className={cn(
          "fixed inset-0 ml-8 md:ml-12 z-30",
          "flex flex-col items-center",
          "cursor-pointer select-none",
          "transition-transform duration-700 ease-in-out",
          isPageTurned && "translate-x-[-100%] opacity-0 pointer-events-none"
        )}
        style={{
          transformOrigin: "left center",
          perspective: "2000px",
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center pt-24 md:pt-32 px-8 max-w-2xl w-full">
          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[0.2em] uppercase text-center mb-6 animate-fade-in-up">
            <span className="text-white">El Archivo de Paula</span>
          </h1>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-paper/90 text-center mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Una colección personal de libros, historias y mundos por descubrir
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-md animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar por título o autor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchSubmit}
              className="w-full pl-12 pr-4 py-6 bg-paper/95 border-gold/30 text-foreground placeholder:text-muted-foreground/70 font-body text-base rounded-lg focus:border-gold focus:ring-gold/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>

        {/* Click hint on right side */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/4 flex items-center justify-end pr-8 cursor-pointer group"
          onClick={handlePageTurn}
        >
          <div className={cn(
            "flex flex-col items-center gap-3 text-paper/60",
            "transition-all duration-300",
            "group-hover:text-white group-hover:translate-x-1"
          )}>
            <span className="font-body text-sm italic hidden md:block">
              Pasar página
            </span>
            <ChevronRight 
              className={cn(
                "w-8 h-8",
                "transition-transform duration-300",
                "group-hover:scale-110"
              )} 
            />
          </div>
          
          {/* Hover effect zone */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-l from-white/15 to-transparent",
            "opacity-0 transition-opacity duration-300",
            "group-hover:opacity-100"
          )} />
        </div>

        {/* Page edge shadow */}
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-black/30 to-transparent" />
      </div>

      {/* Book Collection Page (Behind) */}
      <div 
        className={cn(
          "fixed inset-0 ml-8 md:ml-12 z-20 bg-[#b8ae90]",
          "transition-opacity duration-500",
          !isPageTurned && "opacity-0 pointer-events-none",
          isPageTurned && "opacity-100"
        )}
      >
        <div className="relative h-full overflow-y-auto">
          <BookCollection className={isPageTurned ? "animate-page-reveal" : ""} searchQuery={submittedQuery} />
          
          {/* Back button */}
          <button
            onClick={handleGoBack}
            className={cn(
              "fixed top-6 left-16 md:left-20 z-50",
              "flex items-center gap-2 px-4 py-2",
              "font-display text-sm tracking-wider uppercase",
              "text-muted-foreground hover:text-foreground",
              "transition-all duration-300",
              "hover:-translate-x-1"
            )}
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span>Volver</span>
          </button>

          {/* 🔍 NUEVO BUSCADOR (Derecha) */}
          <div className="fixed top-4 right-4 md:right-8 z-50 w-full max-w-xs">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Buscar en colección..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleCollectionSearchSubmit} // Dispara la búsqueda solo si ya estamos en la colección
                className="w-full pl-10 py-2 bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 font-body text-sm rounded-lg focus:border-gold focus:ring-gold/20 shadow-md"
                onClick={(e) => e.stopPropagation()} // Detener la propagación del clic para evitar que interfiera con el giro de página
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PageTurnEffect;
