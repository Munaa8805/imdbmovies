import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
    return (
        <div className="flex space-x-4 items-center justify-center py-4 bg-slate-50  dark:bg-gray-600">
            <NavbarItem title="Trending movies" params="fetchTrending" />
            <NavbarItem title="Top rated movies" params="fetchTopRated" />
        </div>
    );
};

export default Navbar;
