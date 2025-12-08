import { Helmet } from "react-helmet-async";
import PageTurnEffect from "@/components/PageTurnEffect";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>El Archivo de Paula</title>
        <meta 
          name="description" 
          content="El Archivo de Paula| Biblioteca Personal - Una colección personal de libros y lecturas. Descubre mi biblioteca y las historias que han marcado mi vida." 
        />
      </Helmet>
      <PageTurnEffect />
    </>
  );
};

export default Index;
