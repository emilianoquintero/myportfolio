import './MenuApp.css';

function MenuApp() {
    return (
        <header className='menu-header'>
          <a>
            <button> Menu nav</button>
          </a>
          <div className='list-menu'>
            <ul>
              <li>About</li>
              <li>Resume</li>
              <li>Works</li>
              <li>Apps</li>
              <li>Contact</li>
            </ul>
          </div>
        </header>
    );
}

export default MenuApp;