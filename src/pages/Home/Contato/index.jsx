
import "./Contato.css"
import FormContato from "./FormContato"
import RedesSociais from "./RedesSociais"

function Contato(){
    return(
        <>
            <div className="container">
                <RedesSociais/>
                <div id="linha"></div>
                 <FormContato/>
            </div>
        </>
    )
}

export default Contato