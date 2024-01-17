import logo from './logo.svg';
import './App.css';


const number = 5555;

const singer = {
  
  name: 'Dr Mahfuz',
  job:'Singer'
}

const singerStyle = {
  
  color: 'purple'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 style={{backgroundColor:'red'}}>JSX</h1>
        <h2 >Sarin</h2>
        <div className="container">
          

          <h3>How are you?</h3>
          

        </div>

        <div className="music">
          <p style={singerStyle}>Name:{number + 2000}</p>
          <p style={singerStyle}>Singer:{singer.name} {singer.job }</p>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
    </div>
  );
}

export default App;
