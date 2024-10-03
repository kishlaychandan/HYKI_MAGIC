import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "HOME", url: "/" },
  { id: 2, name: "ABOUT", url: "/about" },
  { id: 3, name: "PRODUCTS", url: "/product" },
  { id: 4, name: "CONTACT", url: "/contact" },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-gray-800 dark:text-gray-200">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} className="text-gray-600 dark:text-gray-400" />

                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg dark:bg-gray-800 dark:text-gray-200">
                    {categories?.map(({ attributes: c, id }) => {
                      return (
                        <Link
                          key={id}
                          href={`/category/${c.slug}`}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-gray-200 rounded-md dark:hover:bg-gray-700">
                            {c.name}
                            <span className="opacity-50 text-sm">
                              {`(${c.products.data.length})`}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer group">
                <Link href={item?.url}>
                  <span className="transition-colors duration-300 ease-in-out group-hover:bg-blue-500 dark:group-hover:bg-blue-700 rounded-md px-3 py-2 hover:text-white dark:hover:text-white">
                    {item.name}
                  </span>
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
