import Discord from "../../../../assets/Discord.png";
import Twitter from "../../../../assets/Twitter.png";
import Instagram from "../../../../assets/Instagram.png";
import './RedesSociais.css'


function RedesSociais(){
    return(
        <>
            <div className="suporte">
                <h1>Dúvidas e suporte, entre em contato:</h1>
                <div className="icones">
                    <a href="#"><img src={Twitter} alt="Logo do Twitter" /></a>
                    <a href="#"><img src={Instagram} alt="Logo do Instagram" /></a>
                    <a href="#"><img src={Discord} alt="Logo do Discord" /></a>
                </div>
            </div>
        </>
    )
}

export default RedesSociais;