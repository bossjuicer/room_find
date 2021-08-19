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
function Buttons(){
  return (
    <>
    {/* <input></input> */}
    <button>Sign Up</button>
    <button>LogIn</button>
    </>
  );
}

function Location(){
  return (

    <>
    <select>
      <option value="zakir">Zakir Nagar</option>
      <option value="zakir">Batla House</option>
      <option value="zakir">Hari Masjid</option>
      <option value="zakir">jbsjadb</option>
      <option value="zakir">alksdnkla</option>
    </select>
    </>
  );
}
function GetGender(){
  return (
    <>
    <input type="radio" value="male" name="radio"></input>Male
    <input type="radio" value="female" name="radio"></input>Female
    </>
  );
}

function Flattype(){
  return (

    <>
    <select>
      <option value="zakir">1 Room</option>
      <option value="zakir">1 BHK</option>
      <option value="zakir">2 BHK</option>
      <option value="zakir">3 BHK</option>
    </select>
    </>
  );
}

function Parking(){
  return (
    <>
    <select>
      <option value="zakir">2 Wheelar</option>
      <option value="zakir">4 Wheelar</option>
    </select>
    </>
  );
}

function People(){
  return (

    <>
    <input type="number"></input>
    </>
  );
}

function Budget(){
  return (
    <>
      <select>
      <option value="zakir">2000-6000</option>
      <option value="zakir">6000-10,000</option>
      <option value="zakir">10,000-15000</option>
    </select>
    </>
  );
}
function App() {
  return (
    <div>
      <header className="App-header">
        <Head />
        <Buttons/>
       </header>
      <div className="container">
      Your Location<Location/>
      <br/>
      Select Gender <GetGender/>
      <br/>
      Apartment Type <Flattype/>
      <br/>
      Parking:- <Parking/>
      <br/>
      Number of People:- <People />
      <br/>
      Budget:- <Budget/>
      </div>
      {/* <Contain/> */}
    </div>
  );
}

export default App;
