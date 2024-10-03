import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Products", url: "/product" }, // Changed from Categories to Products
    { id: 4, name: "Contact", url: "/contact" },
];

const MenuMobile = ({ setMobileMenu }) => {
    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
            {data.map((item) => {
                return (
                    <li key={item.id} className="py-4 px-5 border-b">
                        <Link
                            href={item.url}
                            onClick={() => setMobileMenu(false)}
                        >
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default MenuMobile;
