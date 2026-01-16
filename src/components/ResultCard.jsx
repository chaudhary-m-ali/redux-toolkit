import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addToast } from "../redux/features/collectionSlice";
const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addToast());
  };
  return (
    <div className=" w-full sm:w-[40vw] md:w-[27vw] lg:w-[20vw]  xl:w-[17vw] h-80 bg-white rounded-xl overflow-hidden relative    ">
      <a href={item.url} target="_blank" className="h-full ">
        {" "}
        {item.type === "photo" ? (
          <img
            className="h-full w-full object-cover object-center "
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type === "video" ? (
          <video
            autoPlay
            loop
            muted
            src={item.src}
            className="h-full w-full object-cover object-center "
          ></video>
        ) : (
          ""
        )}
        {item.type === "gif" ? (
          <img
            src={item.src}
            className="h-full w-full object-cover object-center "
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className=" flex gap-2 justify-between items-center absolute bottom-0  text-white  w-full p-4  "
      >
        <h1 className="text-sm font-semibold capitalize  overflow-hidden">
          {item.title}
        </h1>
        <button
          className="bg-indigo-600 text-white rounded  px-3 py-1 cursor-pointer font-medium active:scale-95"
          onClick={() => addToCollection(item)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
