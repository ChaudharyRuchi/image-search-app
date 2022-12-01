import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "wRVatl4XFxC8-SiD_LqhQR1W9a4gGmx3AOh56PRxxRg",
});

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        console.log(json.results);
        setPics(json.results);
      });
    console.log("Submitting the form", pics);
  };
  console.log(query);

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query"></label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="Serach from high revolution images"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      {pics && (
        <div className="card-list">
          {pics.map((pic) => (
            <div className="card" key={pic.id}>
              <img
                className="card-image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
