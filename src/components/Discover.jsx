import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Discover = () => {
    const [publicMovies, setPublicMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_SERVER_BASE_URL}/api/public`
                );
                setPublicMovies(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        // <div className="flex justify-center items-center gap-5 text-white ">
        //     {publicMovies.map((movie) => (
        //         <div key={movie.id}>
        //             <h2>{movie.title}</h2>
        //             <img
        //                 src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        //                 alt={movie.title}
        //                 height={50}
        //             />
        //             {/* Display other movie details as needed */}
        //         </div>
        //     ))}
        // </div>

        <div className="card w-full shadow-xl text-white flex flex-wrap justify-center items-center my-3 gap-8 ">
            {publicMovies.map((movie) => (
                <div
                    key={movie.id}
                    className="w-64 bg-gray-100 rounded-xl overflow-hidden hover:scale-105 transition-all duration-200"
                >
                    <figure>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </figure>
                    <div className="card-body px-3 text-black ">
                        <h2 className="card-title">{movie.title}</h2>
                        <p>{movie.vote_average}</p>
                        <div className="card-actions justify-end">
                            <Button size="small">
                                <FavoriteBorderIcon title="Add to List" />
                            </Button>
                            <Link to={`/movies/${movie.id}`}>See Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Discover;
