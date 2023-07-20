import './Filmes.css'

const Filmes = ({ nome, ano, genero, plataforma, imagem, corPrincipal}) => {

    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corPrincipal}}>
                <img src={imagem} alt="" />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{ano}</h5>
                <h5>{genero}</h5>
                <h5>{plataforma}</h5>
            </div>           
        </div>
    )
}

export default Filmes;