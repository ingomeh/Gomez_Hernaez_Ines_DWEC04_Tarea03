// Se importa la biblioteca de React
import React from "react";

// Se define el componente Article. Se desestructuran las props en variables
const Article = ({srcImage, descipcion, categoria, index, selectedIndex, totalViajes}) => {
  // Se determina la posición del artículo en el carrusel. Se inicializa con el valor nextSlide
  let position = "nextSlide";
  
  // Si el índice del artículo que estamos renderizando coincide con el del índice seleccionado es que se trata del elemento activo (activeSlide)
  if (index === selectedIndex){
    position = "activeSlide";
  }

  // Si el índice del artículo que estamos renderizando es el anterior al seleccionado, se trata del lastSlide
  // Si el elemento seleccionado es el 0 y el lastSlide es ultimo articulo
  if (index === selectedIndex - 1 || (selectedIndex === 0 && index === totalViajes-1)){
    position = "lastSlide";
  }

  // Se devuelve la estructura del artículo con la información recibida a través de las props y con la posición cálculada
  return (
    <article className={position}>
      <img src={srcImage} alt={descipcion} className="person-img" />
      <h4>{descipcion}</h4>
      <p className="title">{categoria}</p>
    </article>
  );
};

// Se exporta el componente Article para que pueda ser utilizado en otros archivos
export default Article;