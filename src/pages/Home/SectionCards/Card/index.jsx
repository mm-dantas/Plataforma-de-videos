    import "./Card.css"

    function Card({ dados }) {
        return(
            <>  
            {
                dados.map((pegaDados, index) => (

                    <div 
                    className="containerCard"
                    key={index}
                    style={
                        {
                            backgroundColor: pegaDados.corFundo
                        }
                    }>
                        
                        <h1>{(index + 1).toString().padStart(2,'0')}</h1>
                        <h2>{pegaDados.nomePlat}</h2>
                        <p>{pegaDados.sobre}</p>
                        <img src={pegaDados.img} alt="Imagem do ícone do youtue"/>
                    </div>
                ))
            }
            </>
        )
    }

    export default Card