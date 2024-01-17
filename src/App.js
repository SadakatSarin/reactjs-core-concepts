import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New component</h5>
      <p>Rock mama react mama</p>
      <Friend></Friend>

    </div>
  );
}


function Person(){

  return (
    //component
    <div className='person'> 
      <h1>Hello</h1>
      <p>sarin</p>
    
  </div>
  
  )

}


function Friend() {
  

  return (

    <div className='person'> 

      <h3>Ajay Devgan</h3>
      <p>Job:Maramari</p>

    </div>


  )
}





export default App;
