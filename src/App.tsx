import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <HelmetProvider>
    {/*Esto le dice al router que la ruta base de la aplicación es:*/}
    <BrowserRouter basename="/El-Archivo-de-Paula">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
