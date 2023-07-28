import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import RegularHeader from "./RegularHeader";
import { Button } from "@mui/material";

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
            .then((res) => setMovie(res.data))
            .catch((e) => setError(e.response?.data?.message));
    }, []);

    const handleDelete = () => {
        axios
            .delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/books/${id}`)
            // eslint-disable-next-line no-unused-vars
            .then((res) => navigate("/"))
            .catch((e) => console.log(e));
    };

    return (
        <>
            <RegularHeader />
            <div>
                {error && <p>{error}</p>}
                {movie && (
                    <>
                        <div>
                            <h2>{movie.title}</h2>
                            <p>Director: {movie.director}</p>
                            <p>Year: {movie.year}</p>
                            <p>Rating: {movie.rating}</p>
                        </div>
                        <Link to={`/movies/${id}/update`}>Update Movie</Link>
                        <Button onClick={handleDelete}>Delete Movie</Button>
                    </>
                )}
            </div>
        </>
    );
};

export default MovieDetails;
