
export interface Book {
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