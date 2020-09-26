import React from "react";
import Produto from "./Produto";
import Titulo from "./Titulo";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", caracteristicas: ["16gb ram", "512gb"] },
    { nome: "Smartphone", caracteristicas: ["2gb ram", "128gb"] },
  ];

  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  );
};

export default Produtos;
