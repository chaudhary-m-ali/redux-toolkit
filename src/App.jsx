import React from "react";
import { fetchPhotos, fetchVideos, fetchTenorGifs } from "./api/MediaApi";
import SearchBar from "./components/SearchBar";
import Tab from "./components/Tab";
import ResultGrid from "./components/ResultGrid";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-white 2xl:mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
