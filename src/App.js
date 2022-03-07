import './App.css';
import Modal from "./Components/Modal/Modal";
import axios from 'axios';
import {Fragment, useEffect, useState} from "react";
import Topo from "./Components/Topo/Topo";
import Logo from "./Components/Logo/Logo";
import Botao from "./Components/Botao/Botao"

function App() {

  const [busca, setBusca] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [mostrar, setMostrar] = useState (10);
  
// Abaixo, função que obtém os dados da API SpaceFlightNews, com uso da biblioteca Axios;  
  
  useEffect(function () {
    axios.get("https://api.spaceflightnewsapi.net/v3/articles?_limit=200").then(
      function (response) {
        setNoticias(response.data)
        setBusca(response.data)
      }
    )
  }, [])


// Abaixo, Função que filtra as notícias das mais antigas para as mais novas e vice-versa;

  function handleSortAsc() {
    const sortedDataAsc = [...noticias].sort((a,b) => {
      return a.publishedAt > b.publishedAt ? 1 : -1
    })
      setNoticias(sortedDataAsc)
  }

  function handleSortDsc() {
    const sortedDataDsc = [...noticias].sort((a,b) => {
      return b.publishedAt > a.publishedAt  ? 1 : -1
    })
      setNoticias(sortedDataDsc)
  }


//Abaixo, Função que implementa a barra de busca tendo o título das notícias como alvo;

  function handleChange({target}) {
    if(!target.value.toLowerCase()){
      setNoticias(busca);
      return;
    }

    const buscaNoticias = noticias.filter((noticias) => noticias.title.toLowerCase().includes(target.value.toLowerCase()))
    setNoticias(buscaNoticias);
    }

// Abaixo, Função que limita a requisição de artigos a 10 por vez, conforme click no botao; 

    const mostrarMais = () => {
      setMostrar((valorAnterior) => valorAnterior + 10)
    }


  return (
    <>
    <Topo handleSortAsc={handleSortAsc} handleSortDsc={handleSortDsc} buscaNoticias={handleChange}/>
    <Logo/>
    {noticias.sort((a,b)=>{if(a>b){ return 1;}}).slice(0, mostrar).map(function(noticias, key){
    return(
      <section key={key} className='conteudo'>
        <div className='conteudo_img'>
          <img src={noticias.imageUrl}/>
        </div>
        <div className='conteudo_info'>
          <h1>{noticias.title}</h1>
          <p>{noticias.publishedAt.substring(0,10)}</p>
          <p>{noticias.summary}</p>
          <Modal data={noticias.publishedAt.substring(0,10)} titulo={noticias.title} resumo={noticias.summary} site={noticias.url} img={noticias.imageUrl}/>
        </div>
      </section>
  )})
  }
   <Botao mostrarMais={mostrarMais}/> 
  </>
  );
}

export default App;
