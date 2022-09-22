import { useState } from 'react';
import './App.css';
import AllGuns from './components/AllGuns/AllGuns';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const addToCart = ()=>{
       setCount(count + 1);
  }
  return (
    <div className="App">
      <Navbar count = {count}></Navbar>
      <AllGuns addToCart = {addToCart}></AllGuns>
    </div>
  );
}

export default App;
