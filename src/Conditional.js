import { useState } from 'react';
import './App.css';
import Counter from './Counter';


const App = () => {

const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='container'>
      <h1>Välkommen till vår app!</h1>
      <div>
    {loggedIn ? (
      
      
      <Counter />
    ): (
      <p>Snälla logga in</p>
    )}
    <div>
      <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? "Logout" : "Login"}</button>

    </div>


      </div>

    </div>
  )
}

export default App;
