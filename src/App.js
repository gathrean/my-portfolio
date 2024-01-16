// App.js focuses on the component logic

// Styles
import logo from './assets/images/logo.svg';
import './assets/fonts/Benzin Bold.ttf'
import './styles/App.css';

// Navigation
import Sidebar from './Sidebar';

// Pages
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

// Projects Pages
import DungeonQuad from './components/projects/DungeonQuad';
import Nebula from './components/projects/Nebula';
import OrcaSwipe from './components/projects/OrcaSwipe';

const sectionRefs = {};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
