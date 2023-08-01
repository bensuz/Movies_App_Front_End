import { useState, useEffect } from "react";
import axios from "axios";
import "./movies.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Spinner, Button, Input } from "@material-tailwind/react";

const MyList = () => {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
            .then((res) => {
                console.log(res.data);
                setMovies(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

    if (!movies) {
        return <Spinner className="h-16 w-16 text-mb-quartery" />;
    }
    return (
        <>
            <div className=" bg-slate-800 pt-[150px] flex flex-col justify-center items-center gap-20">
                <div className="relative flex w-full gap-2 md:w-max text-white ">
                    <Input
                        type="search"
                        label="Search in My List"
                        className="pr-20 border-t-white h-11 min-w-[400px] "
                    />
                    <Button
                        size="sm"
                        className="!absolute right-1 top-1 rounded bg-mb-primary text-mb-secondary font-bold h-9"
                    >
                        Search
                    </Button>
                </div>
                <div className="card w-full shadow-xl text-white flex flex-wrap justify-center items-center  gap-8 ">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="w-64 h-[430px] bg-gray-100 rounded-xl overflow-hidden hover:scale-105 transition-all duration-200"
                        >
                            <Link to={`/movies/discover/${movie.id}`}>
                                <figure className="h-2/3 overflow-hidden">
                                    <img src={movie.poster} alt={movie.title} />
                                </figure>
                                <div className="card-body h-1/3 px-3 text-black flex flex-col justify-between items-start">
                                    <h2 className="card-title pt-2 text-lg font-medium text-slate-700 h-2/4">
                                        {movie.title}
                                    </h2>
                                    <div className="h-2/4">
                                        <div>
                                            <i
                                                className="fas fa-star text-yellow-400 text-lg mr-1 "
                                                title="Rating"
                                            ></i>
                                            {movie.rating}
                                        </div>
                                        <div className="card-actions flex justify-between items-center gap-11">
                                            <Link
                                                to={`/movies/${movie.id}`}
                                                className="text-mb-secondary hover:text-mb-quartery"
                                            >
                                                See Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" bg-slate-800 flex justify-around pb-24 pt-10">
                <button className=" rounded-xl bg-mb-quartery hover:bg-pink-800 text-white p-3 self-end ">
                    <i
                        className="fas fa-heart text-lg leading-none mr-3"
                        title="Add to My List"
                    ></i>{" "}
                    Add New Movie
                </button>
            </div>
        </>
    );
};

export default MyList;
