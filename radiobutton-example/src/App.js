
import './App.css';
import {useState} from 'react';
const questions=[
  {
    question:"What is capital city of India?",
    options:["Hyderabad","Delhi","Mumbai","Pune"],
    answer:"Delhi"
  },
  {
    question:"How many states are in India?",
    options:[22,32,25,28],
    answer:28
  }
]
function App() {
  const[questionNumber,setQuestionnumber]=useState(0);
  const[selectedAnswer,setSelectedAnswer]=useState({});
  const[submit,setSubmit]=useState(false)
  const[arr,setArr]=useState(Array(questions.length).fill(0));
  const handleChange=(option)=>{
       setSelectedAnswer((prev)=>{
        return {...prev,[questionNumber]:option}
       })
       if(questions[questionNumber].answer===option)
       {
        let newarr=[...arr];
          newarr[questionNumber]=1;
          setArr(newarr);
       }
  }
  return (
    <div className="App">
       <h3>{questionNumber+1}/{questions.length}</h3>
        <h3>{questionNumber+1}.{questions[questionNumber].question}</h3>
          {questions[questionNumber].options.map((option,index)=>(
            <div className=" App1" key={index}>
              <input type="radio" name={questionNumber} onChange={()=>handleChange(option)}
               checked={selectedAnswer[questionNumber]===option} /> {option}
            </div>
          ))}
        <button onClick={()=>setQuestionnumber(questionNumber-1)} disabled={questionNumber===0}>Prev</button>
        <button>Show Answer</button>
        <button onClick={()=>{
          console.log(arr)
          if(questionNumber===questions.length-2)
          {
            setSubmit(true);
            console.log("it became true")
          }
          setQuestionnumber(questionNumber+1)}} disabled={questionNumber===questions.length-1}>Next</button><br/><br/>
        {submit&&<button onClick={()=>{
          let ans=arr.reduce((ele,acc)=>{
            return acc=acc+ele
          },0)
          console.log(ans);
          console.log(arr)
        }}>Submit</button>}
        {JSON.stringify(selectedAnswer)}
    </div>
  );
}

export default App;
