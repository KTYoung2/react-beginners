import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
   // loading 되고 있을때, loading이 되었을 때 setLoding(false) 로 바꿔죽고
  const [loading, setLoding] = useState(true);
  // 비어있는 movies에 API로 얻은 data로 setMovies 즉 satate 변경
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await ( 
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=10&sort_by=year"
    )).json();
    //satate 변경
    setMovies(json.data.movies);
    setLoding(false);
  };
  console.log(movies);
  useEffect(()=>{
      getMovies();
  }, []);

  return (
    <div>
      {loading ? ( <h1>Loging ... </h1> 
      ) : ( 
        <div>
          {/* movie api받은 데이터에 접근해서 ui를 보여주는 것 */}
          {movies.map((movie)=> ( 
          /* 자식 컴포넌트에게 props 전달(함수명은 내 맘대로 정해도 되지만, 접근 데이터 이름은 
            api에서 받아온 그대로 명시해줘야함.)*/
            <Movie 
                  key={movie.id}
                  //url변수 props로 자식 컴포넌트에게 전달.
                  id={movie.id}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
            /> 
          ))}
       </div>
    )}
    </div>
  );
}

export default Home;