import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

function App() {
  let Pagina = window.location.pathname == "/" ? Home : Produtos;
  return (
    <div>
      <Header />
      <Pagina />
    </div>
  );
}

export default App;
