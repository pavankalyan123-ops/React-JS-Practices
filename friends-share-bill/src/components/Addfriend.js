import React,{useState} from 'react'

const Addfriend = ({addfriend}) => {
    const[input,setInput]=useState('');
    const handleadd=(e)=>{
      e.preventDefault();
      addfriend(input);
      setInput('')
    }
  return (
    <div>
        <form onSubmit={handleadd}>
        <h3>Add Friend</h3>
        <div>
        <label>Friend Name</label>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        </div>
        <div>
        <button>Add Friend</button>
        </div>
        </form>
    </div>
  )
}

export default Addfriend