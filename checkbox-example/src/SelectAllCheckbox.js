import React, { useState } from 'react';


export default function SelectAllCheckbox() {
  const [arr, setArr] = useState(["cricket", "basketball", "volleyball", "football", "kabaddi", "tennis ball", "shuttle"]);
  const [selectedgame, setSelectedgame] = useState([]);

  const handleCheck = (e, game) => {
    if (selectedgame.includes(game)) {
      let newarr = selectedgame.filter(g => g !== game);
      setSelectedgame(newarr);
    } else {
      setSelectedgame([...selectedgame, game]);
    }
  }

  const handleChange = (e) => {
    if (e.target.checked) {
      setSelectedgame(arr);
    } else {
      setSelectedgame([]);
    }
  }

  return (
    <div>
      <input type="checkbox" onChange={handleChange} /> Select All
      <h3>select Games</h3>
      {arr.map((a, index) => (
        <div key={index}>
          <input type="checkbox" value={a} onChange={(e) => handleCheck(e, a)} checked={selectedgame.includes(a)} />{a}
        </div>
      ))}
      <br />
      {JSON.stringify(selectedgame)}
    </div>
  );
}
