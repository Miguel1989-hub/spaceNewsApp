import React from "react";
import "./estilo.css";
import logo from "./logo.png";

function Logo() {
    return(
        <>
        <section className="container_meio">
         <div className='contaner_meio-logo'>
         <img src={logo}/>
            </div>
        <   div className='container_meio-titulo'>
          <h1>Space Flight News</h1>
        </div>
      </section>
      <hr className='linha'/>
      </>
    )
}

export default Logo;