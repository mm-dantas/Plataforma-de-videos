import VideoScreen1 from '../../../../assets/VideoScreen1.png'
import SavedScreen2 from '../../../../assets/SavedScreen2.png'
import './ImagemRede.css'

function ImagemRede(){
    return(
        <>
            <div className='containerRede'>
                <img className='celular' src={VideoScreen1} alt="Plataforma de vídeos" />
                <img className='celular'src={SavedScreen2} alt="Salvando uma ação" />
            </div>
        </>
    )
}

export default ImagemRede;