import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail () {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(()=> {
        const getDtail = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            console.log(json);
            setMovies(json.data.movie);
            setLoading(false);
        };
        getDtail();
    }, [id]);
    return (
        <div>
            {loading ? ( 
             <h1>Dtail Loading ... ⌛</h1> 
          ) : ( 
            <div>
                <img src={movies.large_cover_image} />
                <h1>Title : {movies.title}</h1>
                <p>{movies.description_intro}</p>
                <ul>
                {movies.genres.map((g) => (
                    <li key={g}> genres : {g}</li>
                ))}
                    <li>runtime: {movies.runtime} minute</li>
                    <li>Rating : {movies.rating}</li>
                    <li>Like : {movies.like_count}</li>

                </ul>
            </div>
         )}
        </div>
    )
};

export default Detail;