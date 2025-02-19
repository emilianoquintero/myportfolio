import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuApp from './components/portfolio/MenuApp';
import ProfileCardApp from './components/portfolio/ProfileCardApp';
import InfoCardApp from './components/portfolio/InfoCardApp';

function App() {
  return (
    <div className="App">
      <div className='App-container'>
        <MenuApp></MenuApp>
        <ProfileCardApp></ProfileCardApp>
        <InfoCardApp></InfoCardApp>
      </div>
    </div>
  );
}

export default App;
