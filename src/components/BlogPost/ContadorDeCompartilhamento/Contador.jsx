import { useState } from "react";
import  "./Contador.css";
import { Button } from "@mui/material";

function ContadorCompartilhamento(props) {
  const [contador, setContador] = useState(0);

  function atualizaContador() {
    setContador(contador + 1);
  }

  return (
    < div className="container">
      <div className="numberFormat">{contador}</div>
      <Button variant="contained" className="button" onClick={atualizaContador}>Compartilhamentos</Button>
    </div>
  );
}
export default ContadorCompartilhamento;
