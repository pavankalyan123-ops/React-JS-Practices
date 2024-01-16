import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';

const TodoMessage = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [color, setColor] = useState([]);
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleAdd();
      }
    };
  
    const handleAdd = () => {
      setMessages([...messages, input]);
      setInput("");
      setColor([...color, ""]);
    };
  
    const handleMsg = (index) => {
      setColor((prevColor) => {
        const newColor = [...prevColor];
        newColor[index] = newColor[index] === "green" ? "" : "green";
        return newColor;
      });
    };
  return (
    <div>
      
      <input
        type="text"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <br />
      <br />
      <br />
      {messages.map((msg, index) => (
        <div
          style={{
            cursor: "pointer",
            backgroundColor: color[index],
          }}
          key={index}
          onClick={() => handleMsg(index)}
        >
          {msg}
        </div>
      ))}
      <div>
        {color.includes("green")&&<Navbar messages={messages} setMessages={setMessages}
        color={color} setColor={setColor}/>}
      </div>

    </div>
  )
}

export default TodoMessage