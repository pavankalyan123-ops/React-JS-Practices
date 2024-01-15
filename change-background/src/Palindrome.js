import React from 'react'
import {useState} from 'react';

const Palindrome = () => {
    const[input,setInput]=useState('');
    const[palindrome,setPalindrome]=useState(null);
    const isPalindrome=()=>{
        const inputwithoutspace=input.replace(/\s/g,'')
        const reversed=inputwithoutspace.split('').reverse().join('');
        if(inputwithoutspace===reversed)
        {
            setPalindrome(true);
        }else{
            setPalindrome(false);
        }
    }
  return (
    <>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={isPalindrome}>is Palindrome</button>
      <h3>{input&&palindrome!==null?(palindrome?"Yes, it is palindrome":"No it is not palindrome"):""}</h3>
    </>
  )
}

export default Palindrome