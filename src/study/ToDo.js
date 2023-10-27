import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); 
    if(toDo === ""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray])
    setToDo("");
  };

  return (
    <div style={{
      width: 600,
      height: 200,
      backgroundColor: "rgb(242, 242, 242)",
    }}>
      <h1 style={{
        fontFamily:"fantasy",
        fontSize: 50, 
        paddingLeft: 30,
      }}> My To Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
          <input 
            style={{
              border: "none",
              width: 300,
              height: 50,
              paddingRight: 20,
              fontSize: 30, 
            }}
            onChange={onChange} 
            value={toDo} 
            type="text" 
            placeholder="오늘의 할 일은?" />
            <button style={{
              border:0,
              borderRadius: 15,
              backgroundColor: "black",
              color: "white",
              fontFamily:"fantasy",
              fontSize: 40,
            }}>Add</button>
        </form>
        <hr />
        <ul style={{
          listStyle: "none",
        }}>
          {toDos.map((item, index)=>
            <li key={index}>
              ✔️{item}</li>
            )}
        </ul>
    </div>

  );
}


