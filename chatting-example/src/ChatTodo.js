import React from 'react';
import {useState,useEffect,useRef} from 'react';

const ChatTodo = () => {
    const[messages,setMessages]=useState([]);
    const[newMessage,setNewMessage]=useState('');
    const messageContainerRef=useRef(null);

    useEffect(()=>{
        if(messageContainerRef.current)
        {
            messageContainerRef.current.scrollTop=messageContainerRef.current.scrollHeight;
        }
    },[messages])
    const handleKeyDown=(e)=>{
         if(e.key==='Enter')
         {
            e.preventDefault();
            handleSend();
         }
    }
   const handleSend=()=>{
    console.log("hello....",newMessage.trim())
    if(newMessage.trim()!=='')
    {
        const newarr=[...messages,newMessage];
        setMessages(newarr);
        setNewMessage('')
    }
    
   }
  return (
    <div className='chat-container'>
        <div className='message-container' ref={messageContainerRef}>
            {messages.map((msg,index)=>(
                <div key={index} className='message' >{msg}</div>
            ))}
        </div>
        <div className='chat-input'>
            <input type="text" placeholder='type message...'
            value={newMessage} onChange={(e)=>setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown} />
            <button onClick={handleSend}>Send</button>
        </div>
    </div>
  )
}

export default ChatTodo