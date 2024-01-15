
import './App.css';
import useGetApi from './utils';
function App() {
  const ids=[3,5,6,8,9];
  const urls=ids.map(id=>`https://jsonplaceholder.typicode.com/posts/${id}`)
  const getData=useGetApi(urls);
  console.log(getData);
  return (
    <>
      {getData.map((data,index)=>(
        <div>
          <h3>{data.title}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
