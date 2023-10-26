import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(()=> {
    console.log("Call the API");  
  }, []);
  useEffect(() => {
    if(keyword !== "") {
      console.log(`저는 키워드 : ${keyword}가 바뀔 때 마다 변해요`);
    }
  }, [keyword]);
useEffect(() => {
  console.log("저는 카운터가 실행될때 변해요.");
}, [counter]);
  return (
    <div>
      <input
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here"/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me </button>
    </div>
  );
}


