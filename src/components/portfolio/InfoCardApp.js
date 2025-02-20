import './InfoCardApp.css'
import FooterMetasApp from "../metasapp/FooterMetasApp";
import HeaderMetasApp from "../metasapp/HeaderMetasApp";
import Metas from "../metasapp/list/Meta";
import PrincipalMetasApp from "../metasapp/PrincipalMetasApp";

function InfoCardApp() {
    return (
        <>
        <div className='Card-inner Animated active FadeOutLeft'>
            <div className='Card-inner-content-about'>
                <div className='Title'>
                    <span className='First-word'>About </span>
                        Me
                </div>
                <div className='row'>
                        <div className='col'>
                            <div class="text-box">
                            <p>Contenido del párrafo...</p>
                            </div>
                        </div>
                        <div className='col'>
                        <div class="text-box">
                            <p>Contenido del párrafo...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='Card-inner Animated hidden FadeOutLeft'>
          <div className='Card-inner-content'>
            <h1>Adios</h1>
          </div>
        </div>
        <div className='Card-inner Animated hidden FadeOutIn'>
          <div className='Card-inner-content'>
            <HeaderMetasApp></HeaderMetasApp>
            <PrincipalMetasApp>
                <Metas></Metas>
            </PrincipalMetasApp>
            <FooterMetasApp></FooterMetasApp>
          </div>
        </div>
        </>

    );
}

export default InfoCardApp;