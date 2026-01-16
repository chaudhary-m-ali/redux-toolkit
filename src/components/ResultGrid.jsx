import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos, fetchTenorGifs } from "../api/MediaApi";
import {
  setQuery,
  setLoading,
  setResults,
  setError,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";
const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, loading, results, error, activeTab } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photos",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            html: item.links.html,
          }));
        }
        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          console.log(response.videos);

          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name,

            thumbnail: item.image || "video",
            src: item.video_files[0].link,
            url: item.url,
          }));
        }
        if (activeTab == "gifs") {
          let response = await fetchTenorGifs(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.media[0].tinygif.url,
            src: item.media[0].gif.url,
            url: item.url,
          }));
        }
        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    getData();
  }, [query, activeTab]);
  if (error)
    return <h1 className="flex justify-center items-center">{error}</h1>;
  if (loading)
    return <h1 className="flex justify-center items-center">loading...</h1>;

  return (
    <div className="   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-5 lg:px-10 ">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
