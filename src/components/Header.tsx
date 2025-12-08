import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 px-8 py-6",
      "flex items-center justify-center",
      className
    )}>
      <div className="relative">
        {/* Decorative line left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-6 hidden md:flex items-center">
          <div className="w-20 h-px bg-gradient-to-l from-gold/60 to-transparent" />
          <div className="w-2 h-2 rotate-45 border border-gold/60 ml-2" />
        </div>
        
        {/* Title */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[0.3em] uppercase">
          <span className="gold-text">El Archivo</span>
          <span className="text-foreground/80 mx-3 text-lg">de</span>
          <span className="gold-text">Paula</span>
        </h1>
        
        {/* Decorative line right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-6 hidden md:flex items-center">
          <div className="w-2 h-2 rotate-45 border border-gold/60 mr-2" />
          <div className="w-20 h-px bg-gradient-to-r from-gold/60 to-transparent" />
        </div>
      </div>
    </header>
  );
};

export default Header;
