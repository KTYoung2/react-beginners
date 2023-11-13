import { Link } from "react-router-dom";
//브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트


/* movie. 을 삭제한 이유 -> App로부터 얻어야하는 정보기 때문
    props를 통해 App 부모 컴포넌트로 부터 정보 받아오기 !
*/
function Movie({ id, title, summary, genres}) {
    return (
            <div>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p>{summary}</p>
                <ul>
                    {genres.map((g)=>(
                        <li key={g}>{g}</li>
                    ))}
                </ul>
        </div>
    );
};

export default Movie;