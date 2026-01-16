import React from "react";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";
import { useSelector } from "react-redux";
const Tab = () => {
  const tabs = ["photos", "videos", "gifs"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => {
    return state.search.activeTab;
  });
  return (
    <div className="flex gap-5  p-5 justify-center sm:justify-start sm:p-10 ">
      {tabs.map((tab, idx) => {
        return (
          <button
            className={`${
              activeTab === tab ? "bg-blue-700" : "bg-gray-600"
            }  px-5 py-2 rounded uppercase cursor-pointer active:scale-95`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(tab));
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
