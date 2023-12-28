import Link from "next/link";
import React from "react";
import { FcHome } from "react-icons/fc";
import { GrContactInfo } from "react-icons/gr";

const MenuItem = ({ title, address }) => {
    return (
        <div>
            <Link
                href={address}
                className="flex items-center mx-4 lg:mx-6 hover:text-amber-600 hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-200">
                {title === "Home" ? (
                    <FcHome className="text-2xl lg:hidden" />
                ) : (
                    <GrContactInfo className="text-2xl lg:hidden" />
                )}

                <p className="hidden lg:block lg:uppercase lg:text-xl">
                    {title}
                </p>
            </Link>
        </div>
    );
};

export default MenuItem;
