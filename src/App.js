import logo from './logo.jpeg';
import './App.css';

function Head(){
  return (
    <div>

      {/* <h1>My name is kashif</h1>
       */ }
      <img src={logo} alt="Logo" />
    </div>
  );
}


function Contain(){
  return (
    <>
    <input></input>
    </>
  );
}

function App() {
  return (
    <div>
      <header className="App-header">
        <Head />
       </header>
    
      {/* <Contain/> */}
    </div>
  );
}

export default App;
