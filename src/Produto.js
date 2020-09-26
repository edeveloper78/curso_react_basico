import React from "react";

const Produto = ({ nome, caracteristicas }) => {
  return (
    <div>
      <p>{nome} </p>
      <ul>
        {caracteristicas.map((caracteristica) => (
          <li key={caracteristica}>{caracteristica} </li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
