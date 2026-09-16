# El Archivo de Paula 📚

Biblioteca personal en forma de web: una colección de libros navegable, con búsqueda por título/autor y filtro por género, y acceso directo a la descarga en EPUB o PDF de cada uno.

**Demo:** https://pauladolado.github.io/El-Archivo-de-Paula/

## Tecnologías

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) + TypeScript
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- Componentes [shadcn/ui](https://ui.shadcn.com/) sobre [Radix UI](https://www.radix-ui.com/)

## Requisitos

- Node.js 20+
- npm (o [Bun](https://bun.sh/), el repo incluye `bun.lockb`)

## Puesta en marcha

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:8080`.

### Otros scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Build de producción en `dist/` |
| `npm run build:dev` | Build en modo desarrollo (sin minificar) |
| `npm run preview` | Sirve localmente el build de `dist/` |
| `npm run lint` | Linter (ESLint) |

## Estructura del proyecto

```
src/
├── assets/           # Imágenes de fondo y portadas locales
├── components/        # Componentes de la app (Header, BookCard, BookCollection...)
│   └── ui/             # Componentes base (button, dialog, input)
├── data/
│   └── books.ts        # Colección de libros (ver más abajo)
├── interfaces/
│   └── book.ts          # Tipo Book
├── pages/              # Páginas de la app (Index, NotFound)
└── App.tsx             # Router y providers de la app
```

## Añadir o editar un libro

Los libros viven en [`src/data/books.ts`](src/data/books.ts) como un array tipado según [`src/interfaces/book.ts`](src/interfaces/book.ts):

```ts
interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;        // URL de la portada
  year?: number;
  genre?: string[];      // usado para el filtro por género
  saga?: string;
  description?: string;
  epubUrl?: string;      // link de descarga del EPUB
  pdfUrl?: string;       // link de descarga del PDF
}
```

Para añadir un libro nuevo, agrega un objeto más al array `books` con un `id` único. No hace falta tocar ningún otro archivo: la búsqueda, el filtro de géneros y la cuadrícula se generan automáticamente a partir de esos datos.

## Despliegue

El despliegue a GitHub Pages es automático: cada push a `main` dispara el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que instala dependencias, hace `npm run build` y publica el contenido de `dist/`. No requiere ningún paso manual.
