import React from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";

const Header = () => {
    return (
        <header className="w-full shadow-lg">
            <div className="flex items-center justify-between mx-2 max-w-6xl sm:mx-auto py-4">
                <div className="flex items-center gap-4">
                    <MenuItem title="Home" address="/" />
                    <MenuItem title="About" address="/about" />
                </div>
                <div>
                    <Link href="/" className="text-black hover:text-white">
                        <h2 className="text-3xl underline hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-150 px-4 py-2 bg-orange-500 rounded-2xl">
                            IDMS
                        </h2>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
