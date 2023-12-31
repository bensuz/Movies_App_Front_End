import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo_new.png";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton } from "@mui/material";
import UserDropdown from "./UserDropdown";
import Notifications from "./Notifications";

const RegularHeader = () => {
    return (
        <>
            <nav className="fixed  h-28 flex justify-between items-center gap-x-10  w-full mb-5 z-50 bg-slate-900">
                <Link to="/">
                    <div className="flex gap-5 mx-10 items-center ">
                        {" "}
                        <img
                            src={logo}
                            alt=""
                            className="text-white  top-4 text-xl font-bold  w-16"
                        />
                        <h2 className=" text-mb-quartery top-5 text-5xl font-bold">
                            MovieBox
                        </h2>
                    </div>
                </Link>

                <div className="flex justify-center items-center">
                    <ul className="text-mb-quartery flex gap-10 text-xl font-bold p-5 justify-center items-center">
                        <li>
                            <NavLink to="/mylist" className="nav-link">
                                MY LIST
                            </NavLink>
                        </li>
                    </ul>
                    <Box className="text-mb-quartery  justify-end items-end mx-14">
                        <IconButton
                            size="large"
                            aria-label="search"
                            color="inherit"
                        >
                            <SearchIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="display more actions"
                            edge="end"
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                    <Notifications />
                    <UserDropdown />
                </div>
            </nav>
        </>
    );
};

export default RegularHeader;
