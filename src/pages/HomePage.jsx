import React from "react";
import SearchBar from "../components/SearchBar";
import Tab from "../components/Tab";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      <SearchBar />
      {query != "" ? (
        <div>
          <Tab />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
