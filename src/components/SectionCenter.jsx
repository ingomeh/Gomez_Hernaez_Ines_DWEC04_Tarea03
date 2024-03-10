// Se importa la biblioteca de React
import React from "react";
// Se importa el Hook use State de React
import { useState } from "react";
import { useEffect } from "react";

// Se importa el listado de viajes desde el archivo data
import Viajes from "../data";

// Se importa el componente Article
import Article from "./Article";

// Se define el componente SectionCenter.
const SectionCenter = () => {
  // Se obtiene el total de viajes
  let totalViajes = Viajes.length;
  // Se utiliza el Hook useState para gestionar el estado del índice seleccionado. 
  // El valor inicial del indice seleccionado y por lo tanto del estado es 0
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Se utiliza setTimeout para cambiar automáticamente el índice seleccionado cada 2000 milisegundos (2 segundos)
  // Se verifica si el índice actual es el último, en ese caso se reinicia a cero; de lo contrario, se incrementa en uno.
  setTimeout(() => setSelectedIndex(selectedIndex==totalViajes-1?0:selectedIndex + 1), 2000);
  // Se devuelve el contenido del componente SectionCenter
  // Se utiliza la funcion map para renderizar un componente Article por cada viaje.
  // Al componente se le pasan los datos del viaje, el total de viajes y el indice del array de viajes que se esta renderizando
  return (
    <>
      <div className="section-center">
        {Viajes.map((viaje, index) => (
          <Article
            key={viaje.id}
            srcImage={viaje.src}
            descripcion={viaje.img}
            categoria={viaje.categoria}
            index={index}
            selectedIndex={selectedIndex}
            totalViajes={totalViajes}
          />
        ))}
      </div>
    </>
  );
};

// Se exporta el componente SectionCenter para que pueda ser utilizado en otros archivos
export default SectionCenter;
