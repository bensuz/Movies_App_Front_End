import { Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import NewMovie from "./NewMovie";
import MovieDetails from "./MovieDetails";
import UpdateMovie from "./UpdateMovie";
import DiscoverDetails from "./DiscoverDetails";

const Main = () => {
    return (
        <main className="h-4/5">
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/movies/new" element={<NewMovie />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
                <Route path="/movies/:id/update" element={<UpdateMovie />} />
                <Route
                    path="/movies/discover/:id"
                    element={<DiscoverDetails />}
                />
            </Routes>
        </main>
    );
};

export default Main;
