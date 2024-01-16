import React from 'react'

const Navbar = () => {
    const handleDelete=({messages,setMessages,color,setColor})=>{
        const newmessages=[...messages]
        let sample=newmessages.filter((msg,index)=>color[index]!=="green")
        console.log(sample);
        setMessages(sample)
        setColor([])
     }
  return (
    <div>
        <button onClick={handleDelete}>Delete</button>
       <button>Copy</button>
       <br/><br/>
       {JSON.stringify(messages)}
       {JSON.stringify(color)}
    </div>
  )
}

export default Navbar