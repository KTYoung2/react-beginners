

function App() {
    const [toDo, setToDo] = useState("");
    //여러개의 toDo를 받을 수 있는 배열 만들기
    const [toDos , setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
      event.preventDefault(); 
      if(toDo === ""){
        return;
      }
      /*
       toDo를 받을 수 있는 새 배열 state를 만들고 
       array를 직접 적으로 수정하는 방식이 아닌, 함수를 통해 state를 수정한다.
       currentArray 앞에 ...은 원래 있던 배열에 새로운 요소 즉 newtodo를 넣고 싶을 때 
       접근 가능한 function. 
              리액트는 함수의 첫번째 인자로 현재 state를 보낸다. (currentArray)
       setToDos((currentArray) => [toDo, ...currentArray]); 를 동해
                                  (기존 toDo), ...[새로운 toDo]를 추가하는 것     
      */
      setToDos((currentArray) => [toDo, ...currentArray]);
  
      /*
          satae는 집접적으로 수정 불가능. ex)ToDo = ""; 
          -> 함수를 가져와 수정하게 만들어야함.
          setToDo("");를통해 Add 번튼을 누르면 toDo를 빈칸으로 만들어줌.
      */
      setToDo("");
    };
  
    return (
      <div>
        <h1>🚩 My To Dos : ({toDos.length}) </h1>
        <form onSubmit={onSubmit}>
          <input
            value={toDo}
            onChange={onChange} 
            type="text" 
            placeholder="오늘의 할 일..."/>
            <button>Add</button>
          </form>
          <hr />
          <ul>
            {toDos.map((item, index)=> (
              <li key={index}>✔️ {item}</li>
              ))}
          </ul>
      </div>
    );
  }
  
  /*
  map()함수
  배열을 가지고 있을 때 각각의 element들을 바꿀 수 있에 해줌. 
  map() ()에 함수를 넣을 수 있는데 배열의 모든 item에 대해 실행됨.
  즉 배열에 6개의 item이 있으면 6번 함수 힐햄.
  그리고 그 함수에 내가 return한 값을 새로운 배열에 넣음. 
  ex) ['a','b','c','d'].map() => 'ㅎㅎ';
      ['ㅎㅎ','ㅎㅎ','ㅎㅎ','ㅎㅎ'] 인 새 배열을 만듷어줌. 다만 기존 배열에 접근 x
      
      그러나 map은 함수의 첫번째 인자로 현재의 아이템을 가지고 있 수 있음. 
      map((item)) -> item이나 어떤 변수명도 오케
      
      리액트는 기본적으로 배열 list에 있는 모든 item을 인식하기 때문에 key 값을
      넣어 고유하게 만들어줘야함. => {toDos.map((item, imdex) => {item})}
      map((item), 고유값(index))
      즉 {{item},{item},{item},{item}....} 배열을 만을어 각자고유의key(index)를 가지게함. 
  
  */