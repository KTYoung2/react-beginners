

/*
  clean-up (정리를 사용하는 useEffect)
  정리가 필요 없는 Effect도 있지만, 
  정리가 필요한 Effect도 있다. 
  ex ) 외부 데이터에 구독을 설정해야하는 경우, 메모리 누수가 발생하지 않도록 정리 하는 것이
  매우 중요 !

*/
function Hello() {

    //clean-up function (컨포턴트가 사라지면서 실행되는 함수)
      function byFn() {
        console.log("bye :<");
      }
    
      function hiFn() {
        console.log("Hi :>");
        return byFn;
      }
    
      useEffect(hiFn,[]);
    
      return <h1>Hello</h1>;
    }
    
    function App() {
      const [show, setShow] = useState(false);
      const onClick = () => setShow((prev) => !prev);
      return (
        <div>
          { show ? <Hello /> : null }
          <button onClick={onClick}>{ show ? "Hide" : "Show" }</button>
        </div>
      );
    }
    