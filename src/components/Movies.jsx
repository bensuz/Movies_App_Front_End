import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "./movies.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Movies = () => {
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

    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {movies &&
                movies.map((movie) => (
                    <SwiperSlide key={movie.id} className="swiper-slide">
                        <Card sx={{ maxWidth: 445 }} className="slider-cards">
                            <CardMedia
                                sx={{ height: 440 }}
                                image={movie.poster}
                                title={movie.title}
                                className="card-img"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {movie.title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">
                                    <FavoriteBorderIcon />
                                </Button>
                                <Button size="small">See Details</Button>
                            </CardActions>
                        </Card>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default Movies;
