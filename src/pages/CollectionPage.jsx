import React from "react";
import { useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { useDispatch } from "react-redux";
import { clearCollection } from "../redux/features/collectionSlice";
const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  const clearFromCollection = () => {
    dispatch(clearCollection());
  };
  return (
    <div className="overflow-auto px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Your Collection</h2>
          <button
            onClick={() => {
              clearFromCollection();
            }}
            className="bg-red-600 py-2 px-5 rounded text-base font-medium active:scale-95 cursor-pointer"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-xl font-semibold">Collection is Empty</h2>
      )}
      <div className="   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-5 lg:px-10 py-6 ">
        {collection.map((items) => {
          return (
            <div key={items.id}>
              <CollectionCard item={items} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
