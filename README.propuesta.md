<div align="center">

# 📚 El Archivo de Paula

**Biblioteca personal en la web: explora, busca y descarga libros en EPUB o PDF.**

[![Deploy](https://github.com/PaulaDolado/El-Archivo-de-Paula/actions/workflows/deploy.yml/badge.svg)](https://github.com/PaulaDolado/El-Archivo-de-Paula/actions/workflows/deploy.yml)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

[**Ver demo en vivo →**](https://pauladolado.github.io/El-Archivo-de-Paula/)

<img src="public/miniatura.png" alt="Vista previa de El Archivo de Paula" width="720" />

</div>

---

## Índice

- [Sobre el proyecto](#sobre-el-proyecto)
- [Funcionalidades](#funcionalidades)
- [Stack tecnológico](#stack-tecnológico)
- [Primeros pasos](#primeros-pasos)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Gestión del catálogo](#gestión-del-catálogo)
- [Búsqueda y filtros por URL](#búsqueda-y-filtros-por-url)
- [Despliegue](#despliegue)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Sobre el proyecto

**El Archivo de Paula** es una aplicación web estática que presenta una colección personal de libros con una estética de libro antiguo. La experiencia arranca en una portada ilustrada; al «pasar página» se accede al catálogo, donde cada libro muestra su portada, autor y saga, y abre una ficha con sinopsis, año, géneros y enlaces de descarga.

El catálogo se define íntegramente en un único archivo de datos tipado, por lo que no requiere backend ni base de datos: añadir un libro es tan sencillo como añadir un objeto a un array.

## Funcionalidades

- 📖 **Portada interactiva** con animación de paso de página hacia la colección.
- 🔍 **Búsqueda por título o autor**, disponible tanto en la portada como dentro de la colección.
- 🏷️ **Filtro por género** con selección múltiple; los géneros se generan automáticamente a partir del catálogo.
- 🗂️ **Ficha de detalle** en un diálogo modal: sinopsis, año, saga y géneros clicables.
- ⬇️ **Descarga en EPUB y PDF**; los botones se desactivan si el formato no está disponible.
- 🔗 **Estado en la URL**: búsquedas y filtros se reflejan en los parámetros de la URL, de modo que se pueden compartir.
- 📱 **Diseño responsive**, con controles que se ocultan al hacer scroll en móvil.
- 🌐 **SEO y redes sociales**: metadatos Open Graph y Twitter Card, y títulos gestionados con `react-helmet-async`.

## Stack tecnológico

| Área | Tecnología |
| --- | --- |
| Framework | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build y servidor de desarrollo | [Vite 5](https://vitejs.dev/) con [SWC](https://swc.rs/) |
| Enrutado | [React Router 6](https://reactrouter.com/) |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com/) + `tailwindcss-animate` |
| Componentes UI | [shadcn/ui](https://ui.shadcn.com/) sobre [Radix UI](https://www.radix-ui.com/) |
| Iconos | [Lucide](https://lucide.dev/) |
| Calidad de código | [ESLint 9](https://eslint.org/) + `typescript-eslint` |
| CI/CD y hosting | [GitHub Actions](https://github.com/features/actions) + [GitHub Pages](https://pages.github.com/) |

## Primeros pasos

### Requisitos previos

- [Node.js](https://nodejs.org/) **20 o superior**
- npm (incluido con Node.js) o, opcionalmente, [Bun](https://bun.sh/) — el repositorio incluye `bun.lockb`

### Instalación

```bash
git clone https://github.com/PaulaDolado/El-Archivo-de-Paula.git
cd El-Archivo-de-Paula
npm install
```

### Desarrollo local

```bash
npm run dev
```

La aplicación estará disponible en **http://localhost:8080/El-Archivo-de-Paula/**.

> ℹ️ La app se sirve bajo la ruta base `/El-Archivo-de-Paula/` (definida en `vite.config.ts` y en el `basename` del router en `src/App.tsx`) para que coincida con la URL de GitHub Pages. Si despliegas en otro dominio o en la raíz, actualiza ambos valores.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente (puerto 8080). |
| `npm run build` | Genera el build de producción optimizado en `dist/`. |
| `npm run build:dev` | Genera un build en modo desarrollo (sin minificar), útil para depurar. |
| `npm run preview` | Sirve localmente el contenido de `dist/` para validar el build. |
| `npm run lint` | Analiza el código con ESLint. |

## Estructura del proyecto

```
El-Archivo-de-Paula/
├── .github/workflows/
│   └── deploy.yml          # Pipeline de despliegue a GitHub Pages
├── public/                 # Recursos estáticos (favicon, miniatura OG, robots.txt)
├── src/
│   ├── assets/             # Fondos y portadas locales
│   ├── components/
│   │   ├── PageTurnEffect.tsx   # Portada + transición a la colección
│   │   ├── BookCollection.tsx   # Cuadrícula, búsqueda y filtro por género
│   │   ├── BookCard.tsx         # Tarjeta de libro y diálogo de detalle
│   │   └── ui/                  # Componentes base (button, dialog, input)
│   ├── data/
│   │   └── books.ts        # Catálogo de libros
│   ├── interfaces/
│   │   └── book.ts         # Tipo `Book`
│   ├── lib/utils.ts        # Utilidades (helper `cn` para clases)
│   ├── pages/              # Páginas: Index y NotFound (404)
│   ├── App.tsx             # Router y providers
│   └── main.tsx            # Punto de entrada
├── index.html              # HTML base con metadatos SEO / Open Graph
├── tailwind.config.ts
└── vite.config.ts
```

## Gestión del catálogo

Todos los libros se definen en [`src/data/books.ts`](src/data/books.ts) como un array tipado con la interfaz [`Book`](src/interfaces/book.ts):

```ts
interface Book {
  id: string;            // Identificador único
  title: string;         // Título
  author: string;        // Autor/a
  cover: string;         // URL o import de la portada
  year?: number;         // Año de publicación
  genre?: string[];      // Géneros (alimentan el filtro)
  saga?: string;         // Saga y número, p. ej. "Seis de cuervos #01"
  description?: string;  // Sinopsis (admite saltos de línea)
  epubUrl?: string;      // Enlace de descarga EPUB
  pdfUrl?: string;       // Enlace de descarga PDF
}
```

### Añadir un libro

Añade un nuevo objeto al array `books` con un `id` que no exista ya:

```ts
{
  id: "81",
  title: "Título del libro",
  author: "Nombre del autor",
  cover: "https://ejemplo.com/portada.jpg",
  year: 2024,
  genre: ["Fantasía", "Aventuras"],
  saga: "Nombre de la saga #01",
  description: `Sinopsis del libro...`,
  epubUrl: "https://drive.google.com/uc?export=download&id=<ID_ARCHIVO>",
  pdfUrl: "https://drive.google.com/uc?export=download&id=<ID_ARCHIVO>",
},
```

No es necesario modificar ningún otro archivo: la cuadrícula, la búsqueda y la lista de géneros se generan a partir de estos datos.

**Buenas prácticas:**

- Mantén la grafía de los géneros consistente (`"Fantasía"` y `"Fantasia"` aparecerían como géneros distintos en el filtro).
- Para enlaces de Google Drive, usa el formato `uc?export=download&id=...` para que la descarga sea directa.
- Si un formato no está disponible, omite el campo: el botón correspondiente aparecerá desactivado.

## Búsqueda y filtros por URL

El estado de la colección se puede expresar mediante parámetros de URL, lo que permite compartir vistas filtradas:

| Parámetro | Ejemplo | Efecto |
| --- | --- | --- |
| `q` | `?q=sanderson` | Filtra por título o autor. |
| `genre` | `?genre=fantasia,romance` | Muestra libros de cualquiera de los géneros indicados (separados por comas, sin distinguir tildes ni mayúsculas). |

## Despliegue

El proyecto se despliega automáticamente en **GitHub Pages** mediante [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Se dispara con cada `push` a `main` (o manualmente desde la pestaña **Actions** gracias a `workflow_dispatch`).
2. Instala dependencias con Node.js 20 y ejecuta `npm run build`.
3. Publica el contenido de `dist/` en GitHub Pages.

> Para un fork, activa GitHub Pages en **Settings → Pages** con la fuente **GitHub Actions** y ajusta la ruta base si el nombre del repositorio cambia.

## Contribuir

Las sugerencias y mejoras son bienvenidas:

1. Haz un fork del repositorio.
2. Crea una rama: `git checkout -b feature/mi-mejora`.
3. Comprueba que el linter pasa: `npm run lint`.
4. Haz commit de tus cambios y abre un Pull Request describiendo la mejora.

## Licencia

Este repositorio no incluye actualmente un archivo de licencia. Los derechos de las obras, portadas y sinopsis pertenecen a sus respectivos autores y editoriales.

---

<div align="center">
Hecho con ❤️ por <a href="https://github.com/PaulaDolado">Paula Dolado</a>
</div>
