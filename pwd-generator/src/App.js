
import './App.css';
import DisplayPwd from './DisplayPwd';
import DisplayPwdRange from './DisplayPwdRange';
import { useState } from 'react';
function App() {
  const[answer,setAnswer]=useState('');
  return (
    <>
     <div className="main">
      <h1>Password Genearator</h1>
      <div className='container'>
         <DisplayPwd answer={answer}/>
         <DisplayPwdRange setAnswer={setAnswer}/>
      </div>
      </div>
      
    </>
  );
}

export default App;
