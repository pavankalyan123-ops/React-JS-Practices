import {useState} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'
import './App.css';

function App() {
  const[menuOpen,setMenuOpen]=useState(false);
  return (
    <>
       <div className='navbar'>
         <div className='logo'>Logo</div>
         <button className='toggle'
         onClick={()=>{
          console.log("clicked")
          setMenuOpen(!menuOpen)
         }}>{menuOpen?<FaTimes/>:<FaBars/>}</button>
         <div className={`menu ${menuOpen?"active":""}`}>
            <ul>
              <li> <a href="#">Home</a></li>
              <li> <a href="#">About</a></li>
              <li> <a href="#">Services</a></li>
              <li> <a href="#">Contact</a></li>
            </ul>
         </div>
       </div>
    </>
  );
}

export default App;
