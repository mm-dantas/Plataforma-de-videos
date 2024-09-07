import Main from "./Main"
import SectionPlanos from "./SectionPlanos"
import "./Sobre.css"


function Sobre() {
    return (
        <>
            <div className="containerSobre">
                <Main />
                <div className="containerPlanos"></div>
                <SectionPlanos />
            </div>
        </>
    )
}

export default Sobre