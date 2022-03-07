import React from "react";
import "./estilo.css";

function Botao({mostrarMais}) {
    return(
        <div className="btn_mostrar">
            <button onClick={mostrarMais}>Mostrar Mais</button>
        </div> 
    )
}

export default Botao;