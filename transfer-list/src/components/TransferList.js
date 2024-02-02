import React,{useState} from 'react';
import './Transfer.css';
let items=[1,2,3,4,5];
const interSection=(a,b)=>{
    return a.filter(val=>b.indexOf(val)!==-1)
}

const not=(a,b)=>{
    return a.filter(val=>b.indexOf(val)===-1)
}

const TransferList = () => {
    const[leftItems,setleftItems]=useState(items)
    const[rightItems,setRightItems]=useState([]);
    const[checkedItems,setCheckeditems]=useState([]);
    
    const leftcheckeditems=interSection(leftItems,checkedItems);
    const rightcheckeditems=interSection(rightItems,checkedItems);

    const handleChecked=(item)=>{
      const currentIndex=checkedItems.indexOf(item);
      const newcheckedItems=[...checkedItems];
      if(currentIndex===-1)
      {
        newcheckedItems.push(item);
      }else{
        newcheckedItems.splice(currentIndex,1)
      }
        setCheckeditems(newcheckedItems)
    }
    const moveRight=()=>{
        setRightItems(rightItems.concat(leftcheckeditems));
        setleftItems(not(leftItems,leftcheckeditems));
        setCheckeditems(not(checkedItems,leftcheckeditems))
    }
    const moveLeft=()=>{
        setleftItems(leftItems.concat(rightcheckeditems));
        setRightItems(not(rightItems,rightcheckeditems));
        setCheckeditems(not(checkedItems,rightcheckeditems))
    }
  return (
    <div>
        <h3>Transfer List</h3>
        <div className='container'>
            <div className='box container'>
                {leftItems.map((item,index)=>(
                    <div key={index}>
                        <label>
                            <input type="checkbox" onChange={()=>handleChecked(item)} checked={checkedItems.includes(item)} />
                            {item}
                        </label>
                    </div>
                ))}
            </div>
            <div className='container actions'>
                <button onClick={moveRight}>&gt;</button>
                <button onClick={moveLeft}>&lt;</button>
            </div>
            <div className='box container'>
            {rightItems.map((item,index)=>(
                    <div key={index}>
                        <label>
                            <input type="checkbox" onChange={()=>handleChecked(item)} checked={checkedItems.includes(item)} />
                            {item}
                        </label>
                    </div>
                ))}
            </div>
        </div>
      {JSON.stringify(checkedItems)}
    </div>
  )
}

export default TransferList