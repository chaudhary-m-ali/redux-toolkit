import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
    setText("");
    dispatch(setQuery(text));
  };
  return (
    <div>
      <form
        className="flex  gap-5 p-5  sm:p-10 bg-(--c1) "
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          className="border-2 px-4 py-2 text-xl rounded outline-none w-full"
          type="text"
          placeholder="Search Anything..."
          required
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <button className="border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer  active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
