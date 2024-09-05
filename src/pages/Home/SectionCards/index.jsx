import YoutubeHome from '../../../assets/youtubeHome.png';
import TitokHome from '../../../assets/tiktokHome.png';
import FacebookHome from '../../../assets/facebookHome.png';
import IntagramHome from '../../../assets/InstagramHome.png';
import "./SectionCards.css"
import Card from "./Card"

function SectionCards() {
    const redes = [
        {
            nomePlat: "Youtube",
            sobre: "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
            altImg: "Imagem do ícone do Youtue",
            img: YoutubeHome,
            corFundo: "#F1C2B0"
        },
        {
            nomePlat: "TikTok",
            sobre: "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
            altImg: "Imagem do ícone do TikTok",
            img: TitokHome,
            corFundo: "#F9EB98"
        },
        {
            nomePlat: "Facebook",
            sobre: "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
            altImg: "Imagem do ícone do Facebook",
            img: FacebookHome,
            corFundo: "#C0D9DD"
        },
        {
            nomePlat: "Instagram",
            sobre: "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
            altImg: "Imagem do ícone do Instagram",
            img: IntagramHome,
            corFundo: "#6975E8"
        },

    ]
    return(
        <section className='sectionCards'>
            <Card 
                dados={redes}
            />
        </section>
    )    
}

export default SectionCards