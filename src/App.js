// import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src="/logo.png" className="App-logo" alt="logo" />    
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Boitumelo Rakgole</small>
        </footer>
      </div>   
    </div>
  );
}
