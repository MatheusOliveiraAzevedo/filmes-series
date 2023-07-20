import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

function Formulario (props) {
    const plataformas = [
        "Netflix",
        "Apple TV",
        "Amazon Prime Video",
        "HBO Max",
        "Star+",
        "Disney+"
    ]

    const [nome, setNome] = useState("");
    const [anoLanc, setAnoLanc] = useState("");
    const [genero, setGenero] = useState("");
    const [plataforma, setPlataforma] = useState("");
    const [imagem, setImagem] = useState("");

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoFilmeAdicionado({
            nome,
            anoLanc,
            genero,
            plataforma,
            imagem
        })
        setNome('')
        setAnoLanc('')
        setGenero('')
        setPlataforma('')
        setImagem('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <CampoTexto 
                obrigatorio={true} 
                valor={nome} 
                aoAlterado={nome => setNome(nome)} 
                label='Nome do Filme' 
                placeholder='Digite o Nome do Filme'
                />
                <CampoTexto 
                obrigatorio={true} 
                valor={anoLanc} 
                aoAlterado={anoLanc => setAnoLanc(anoLanc)} 
                label= "Ano de lançamento" 
                placeholder="Qual o ano de lançamento?"
                />
                <ListaSuspensa 
                obrigatorio={true} 
                valor={genero} 
                aoAlterado={genero => setGenero(genero)} 
                label="Genero do Filme" 
                itens={props.generos}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                valor={plataforma} 
                aoAlterado={plataforma => setPlataforma(plataforma)} 
                label='Plataforma' 
                itens={plataformas}
                />
                <CampoTexto 
                obrigatorio={true} 
                valor={imagem} 
                aoAlterado={imagem => setImagem(imagem)} 
                label='Imagem' 
                placeholder='Insira a capa do filme' 
                />
                <Botao>Criar Cartão</Botao>
            </form>
        </section>
    )
}

export default Formulario;