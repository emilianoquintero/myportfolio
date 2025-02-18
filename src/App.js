import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMetasApp from './components/metasapp/HeaderMetasApp';
import PrincipalMetasApp from './components/metasapp/PrincipalMetasApp';
import FooterMetasApp from './components/metasapp/FooterMetasApp';

function App() {
  return (
    <div className="App">
      <div className='App-container'>
        <header className='App-header'>
          <a>
            <button> Menu nav</button>
          </a>
          <div className='App-list-menu'>
            <ul>
              <li>About</li>
              <li>Resume</li>
              <li>Works</li>
              <li>Apps</li>
              <li>Contact</li>
            </ul>
          </div>
        </header>
        <div className='App-Profile-card'>
          <div className='Profile-card-align'>
            <div className='Profile-photo'></div>
            <div className='Profile-name'> Emiliano Quintero</div>
            <div className='Profile-title'>Web Developer</div>
            <div className='Profile-social'>
              <a>GitHub</a>
              <a>Linkln</a>
              <a>Spotify</a>
            </div>
            <div className='Profile-card-bottoms'>
              <a>Downald CV</a>
              <a>Contact Me</a>
            </div>
          </div>
        </div>
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
            <PrincipalMetasApp></PrincipalMetasApp>
            <FooterMetasApp></FooterMetasApp>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
