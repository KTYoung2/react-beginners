import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//라우터에 설정한 변수에 어떤 값이 넘어오고 있는지 알 수 있는 컴포넌트 

function Detail(){
    //useParams()를 사용하면 리액트 라우터는 바로 라우터에 설정한 변수의 값을 넘겨줌.
    const { id } = useParams();
    const [movies , setDtail] = useState([]);
    //가지고 와야하는 데이터 response 보내기.
    const getMovies = async () => {
        const json = await ( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        setDtail(json.data.movies.filter((data)=> data.id == id));
        console.log( json);
    };
    useEffect(()=> {
        getMovies();
    },[id]);
    return (
        <div>
            <h2>Detail</h2>
        </div>
    );
}

export default Detail;