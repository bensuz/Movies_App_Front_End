import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewMovie = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");
    const [poster, setPoster] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault;
        axios
            .post(`${import.meta.env.VITE_SERVER_BASE_URL} / api / movies`, {
                title,
                director,
                year,
                rating,
                poster,
            })
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((e) => console.log(e));
    };

    return (
        <div>
            <h2>Add New Movie</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label htmlFor="director">Director</label>
                <input
                    type="text"
                    name="director"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                    required
                />
                <label htmlFor="year">Year</label>
                <input
                    type="text"
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                />
                <label htmlFor="rating">Rating</label>
                <input
                    type="text"
                    name="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
                <label htmlFor="poster">Rating</label>
                <input
                    type="text"
                    name="poster"
                    value={poster}
                    onChange={(e) => setPoster(e.target.value)}
                    required
                />
                <button>Add Movie</button>
            </form>
        </div>
    );
};

export default NewMovie;
