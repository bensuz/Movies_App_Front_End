/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import user from "../assets/useravatar.png";
import { Link } from "react-router-dom";

const UserDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleAvatarClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Handle login logic and API request here
    };

    return (
        <div className="relative inline-block mr-12 text-sm">
            <img
                src={user}
                alt="User Avatar"
                className="w-12 h-12 rounded-full cursor-pointer"
                onClick={handleAvatarClick}
            />
            {isDropdownOpen && (
                <div className="absolute top-14 right-0 w-72 mt-2 mr-3 bg-white rounded-lg shadow-lg">
                    <form
                        className="p-4 bg-mb-primary rounded-xl"
                        onSubmit={handleLoginSubmit}
                    >
                        <div className="mb-4 ">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 mb-2"
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4 ">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 mb-2"
                            >
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-mb-quartery text-white px-4 py-2 rounded-md"
                        >
                            Login
                        </button>
                    </form>
                    <div className="flex flex-col justify-center items-center py-4">
                        <p className=" text-center">Don't have an account? </p>
                        <Link
                            to="/register"
                            className="text-blue-500 hover:underline"
                        >
                            Create Account
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
