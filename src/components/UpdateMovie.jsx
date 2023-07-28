/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVET_BASE_URL}/api/movies/${id}`)
            .then((res) => setMovie(res.data))
            .catch((e) => setError(e.response?.data?.message));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault;
        axios
            .put(
                `${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`,
                movie
            )
            .then((res) => navigate("/"))
            .catch((e) => console.log(e));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie({ ...movie, [name]: value });
    };

    return (
        <>
            <div className="h-96">
                {" "}
                {error && <p>{error}</p>}
                <h2>Update Movie</h2>
                <form onSubmit={handleSubmit} className="bg-red-400">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={movie?.title || ""}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="director">Director</label>
                    <input
                        type="text"
                        name="director"
                        value={movie?.author || ""}
                        onChange={handleChange}
                    />
                    <label htmlFor="year">Year</label>
                    <input
                        type="text"
                        name="year"
                        value={movie?.year || ""}
                        onChange={handleChange}
                    />
                    <label htmlFor="rating">Rating</label>
                    <input
                        type="text"
                        name="rating"
                        value={movie?.rating || ""}
                        onChange={handleChange}
                    />
                    <button>Update Movie</button>
                </form>
            </div>
        </>
    );
};

export default UpdateMovie;
