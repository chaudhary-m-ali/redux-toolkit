import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" py-6 px-10 bg-(--c2) text-2xl font-semibold flex justify-between items-center">
        <Link to="/" className="font-medium text-2xl ">
          Media Search
        </Link>
        <div className="flex gap-5 text-xl items-center">
          <Link
            to="/"
            className="text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2 "
          >
            Search
          </Link>
          <Link
            to="/collection"
            className="text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2 "
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
