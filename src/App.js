import logo from './logo.svg';
import './App.css';
import Complete from "./components/full"
import Home from "./components/home"
import { useState } from 'react';


function App() {
  const [login,setLogin]=useState(false);
  return (
    <div>
    {login ? <Home  /> : <Complete login={login} setLogin={setLogin} />}
    </div>
  );
}

export default App;
