
import './App.css';
import {useState} from 'react';
import FindLargeNumber from './FindLargeNumber';
import Palindrome from './Palindrome';
function App() {
  const[color,setColor]=useState('');
  const handleChange=()=>{
    let body=document.querySelector('body');
    body.style.backgroundColor=color;
    let str="0123456789ABCDEF";
    let str1='#';
    for(let i=0;i<6;i++)
    {
      let randomIndex=Math.floor(Math.random()*str.length);
      str1+=str[randomIndex]
    }
    setColor(str1);
  }
  return (
    <>
      <button onClick={handleChange}>Chnage Background Color</button>
      <br/>
      <FindLargeNumber/>
      <br/>
      <Palindrome/>
    </>
  );
}

export default App;
