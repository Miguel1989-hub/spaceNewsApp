import React from "react";
import "./estilo.css"



function Topo (props) {

  function filtro(event){
    if (event.target.value === "asc"){
      props.handleSortAsc();
    } else {
      props.handleSortDsc();
    }
  }

    return(
        <section className="container-topo">
    <div className="divBusca">
      <input onChange={props.buscaNoticias} type="text" className="txtBusca" placeholder="Buscar..."/>
      <span className='icone-busca'>&#128269;</span>
    </div>
    <div className='filtro'>
    <select onChange={filtro}  className='filtro_select' name="select" >
        <option className="sort" value="valor1">Selecione</option>
        <option value="dsc">Mais Novas</option>
        <option value="asc" >Mais Antigas</option>
    </select>
    </div>
  </section>
    )
}

export default Topo;