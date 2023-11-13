import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function App() {
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
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g)=>(
                  <li key={g}>{g}</li>
                  ))}
              </ul>
            </div>
          ))}
       </div>
       )}
    </div>
  );
}


