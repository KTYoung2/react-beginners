
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

/* Router 
화면 단위로 생각하기!  
router는 URL을 보고있는 컴포넌트 
USER가 이동하려는 경로를 보고 있다가 알맞는 URL의 UI를 컴포넌트 해준다. */

/* 리액트 라우터는 동적 url을 지원해준다.
=> url에 변수를 넣을 수 있다는 뜻 ㅋ 
    /movie/:id (:변수) */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}




export default App;
