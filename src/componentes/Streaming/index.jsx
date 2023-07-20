import Filmes from '../Filmes';
import './Streaming.css'

function Streaming (props) {

    return (
        (props.filmes.length >0) && <section className="streaming" style={{backgroundColor: props.corFundo}}>
            <h3 style={{borderColor: props.corPrincipal}}>{props.nome}</h3>
            <div className='cardCategorias'>
                {props.filmes.map( filme => <Filmes key={filme.nome} nome={filme.nome} ano={filme.anoLanc} genero={filme.genero} plataforma={filme.plataforma} imagem={filme.imagem} corPrincipal={props.corPrincipal} ></Filmes>)}
            </div>
        </section>
    )
}

export default Streaming;

