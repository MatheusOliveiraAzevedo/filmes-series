//import './App.css';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Streaming from './componentes/Streaming';

function App() {

  const especs = [
    {
      nome: "Comédia",
      corFundo: "#f9a77b",
      corPrincipal: "#f67027"
    },
    {
      nome: "Comédia Romantica",
      corFundo: "#90f1cc",
      corPrincipal: "#30c88e"
    },
    {
      nome: "Drama",
      corFundo: "#8ad2fb",
      corPrincipal: "#24aaf7"
    },
    {
      nome: "Documentario",
      corFundo: "#fdffb7",
      corPrincipal: "#bec321"
    },
    {
      nome: "Suspense",
      corFundo: "#bf98fd",
      corPrincipal: "#8132ff"
    },
    {
      nome: "Terror",
      corFundo: "#717483",
      corPrincipal: "#0c133b"
    }
  ]


  const [filmes, setFilmes] = useState([]);

  function aoNovoFilmeAdicionado (filme) {
    console.log(filme);
    setFilmes ([...filmes, filme]);
  }

  return (
    <div className='App'>
      <Banner/>
      <Formulario
      generos={especs.map(genero => genero.nome)}
      aoFilmeAdicionado={filme => aoNovoFilmeAdicionado(filme)}
      />
      {especs.map(stream => 
      <Streaming
      key={stream.nome}
      nome={stream.nome}
      corFundo={stream.corFundo}
      corPrincipal={stream.corPrincipal}
      filmes={filmes.filter(obra => obra.genero === stream.nome)}
      />
      )}
      
    </div>
  );
}

export default App;
