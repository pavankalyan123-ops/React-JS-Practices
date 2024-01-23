import React from 'react';
//import { useState } from 'react';

const DisplayPwd = ({answer}) => {
    //const[password,setPassword]=useState('');
  return (
          <div className="show-pwd">
              {answer?answer:"PASSWORD"}
          </div>
  )
}

export default DisplayPwd