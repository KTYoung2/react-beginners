import { useState, useEffect } from "react";



function App() {
  const [counter , setCounter] = useState(0);
  const [keyword, setKeyword ] = useState("");
  const onClick = () => setCounter((prev) => prev + 1 );
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log("I run all the time");

  /*
  useEffect
  리액트는 state가 변경 될 때마다 렌더링이 되는데
  한번만 실행하거나, 특정상황에서만 실행하고 싶은  함수(로직)들이 있을 때 
  useEffect 사용! (화면이 다 그려지고 나서 한번만 실행)
  두개의 인자를 가지고 있음
  useEffect(한번만 실행하고 싶은 코드 , [])
*/
  const iRunOnce = () => {
    console.log("I run only once")
  };

  useEffect(iRunOnce, []);

  /*
   useEffect에서 특정 함수가 변화했을 때 코드를 실행하고 싶다면
   
   useEffect(한번만 실행하고 싶은 코드 , [변화코드]) 

     useEffect(() => {
      console.log("나는 카운터가 눌릴때바다 바뀌어요");
     }, [counter]);
     => 리액트에게 [counter] 변화를 지켜봐달라고 하는것 

     딱 한번만 실행하고 싶다면 빈 array 작성. 왜? 비어있는
     배열이라 리액트가 지켜볼 게 업ㄱ음 !
  
  */
 
  useEffect(() => {
    if(keyword !== "" && keyword.length > 2){
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  
  useEffect(() => {
      console.log("나는 카운터가 눌릴때바다 바뀌어요");
  }, [counter]);



  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"/>
      <h1> Counter : {counter} </h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}


export default App;
