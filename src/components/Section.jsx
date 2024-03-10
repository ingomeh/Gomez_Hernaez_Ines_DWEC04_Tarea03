// Se importa la biblioteca de React
import React from "react";
// Se importa el componente SectionCenter
import SectionCenter from "./SectionCenter";

// Se define el componente Main.
const Section = () => {
  // Se devuelve el contenido principal del componente Section
  return (
    <section className="section">
      <div className="title">
        <h2>slider DWEC</h2>
        <div className="underline"></div>
      </div>
      <SectionCenter />
    </section>
  );
};

// Se exporta el componente Section para que pueda ser utilizado en otros archivos
export default Section;
