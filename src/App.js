
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a href="https://www.shecodes.io" target='_blank' rel='noreferrer'>
            <img src="/logo.png" className="App-logo" alt="logo" /> 
          </a>   
        </header>
        <Dictionary defaultKeyword="sunset"/>
        <footer>
            This project was coded by{" "}
            <a
              href="https://www.shecodes.io"
               target="_blank"
               rel="noopener noreferrer">
                Boitumelo Rakgole
            </a>{" "}
            and is{" "}
            <a href="https://github.com/BoitumeloRak/dictionary-search-engine" target="_blank" rel="noopener noreferrer">
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a href="https://dictsearch.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
          </footer>    
      </div>   
    </div>
  );
}
