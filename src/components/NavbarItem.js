"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, params }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
    console.log("genre", genre);
    console.log("params", params);
    return (
        <Link
            href={`/?genre=${params}`}
            className={`text-2xl ${
                genre && genre == params
                    ? "text-red-500 underline underline-offset-8"
                    : "text-black"
            } font-semibold  hover:text-amber-600 hover:cursor-pointer hover:scale-105 duration-200 transition-all ease-in-out `}>
            {title}
        </Link>
    );
};

export default NavbarItem;
