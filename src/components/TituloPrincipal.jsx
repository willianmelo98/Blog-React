import { useState, useEffect } from "react";

function TituloPrincipal(props) {
  const [titulo, setTitulo] = useState(props.titulo ?? "Ola mundo");

  useEffect(() => {
    console.log("me execute sempre que o titulo mudar " + titulo);
  }, [titulo]);

  function meuClick(event) {
    alert(titulo);
  }

  function minhaChangeInput(event) {
    const textEvent = event.target.value;
    setTitulo(textEvent);
  }

  return (
    <>
      <input onChange={minhaChangeInput} value={titulo}></input>
      <h1 onClick={meuClick}>{titulo}</h1>
    </>
  );
}
export default TituloPrincipal;
