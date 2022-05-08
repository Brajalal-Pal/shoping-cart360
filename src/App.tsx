<<<<<<< Updated upstream
import React, { useState } from "react";
import "./App.css";
import { getMovieListByTitle } from "./services/MovieService";
=======
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getMoviesAction, getMoviesActionV2 } from "./action/movieActions";

const MovieCard = ({ m }: any) => {
  const onImageError = (e: any) => {
    console.log(e);
    //e.src = "https://freepikpsd.com/file/2019/10/image-not-found-png-4-Transparent-Images.png";
  };

  return (
    <React.Fragment>
      <div style={{ display: "inline-block", padding: "5px" }}>
        <Link to={`/details/${m.id}`}>
          <img
            style={{
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              margin: "2px",
            }}
            src={m?.i?.imageUrl ? m?.i?.imageUrl : "/img/not-found.png"}
            height={300}
            alt={m.l}
          />
          {/* <img
            src={m?.i?.imageUrl}
            onError={(e) => {
              onImageError(e);
            }}
            alt=""
          /> */}
        </Link>
        <div style={{ fontWeight: "bold", textAlign: "center" }}>{m.l}</div>
      </div>
    </React.Fragment>
  );
};
>>>>>>> Stashed changes

const App = () => {
  const [title, setTitle] = useState("");
  const [onlineData, setOnlineData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const populate = () => {
    setLoading(true);
    // Get list from IMDB online
<<<<<<< Updated upstream
    getMovieListByTitle(title, (response: any) => {
      setOnlineData(response);
      setLoading(false);
    });
=======
    dispatch<any>(getMoviesActionV2(title));
>>>>>>> Stashed changes
  };

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

<<<<<<< Updated upstream
=======
  useEffect(() => {
    //console.log("onlineData", onlineData);
    setLoading(onlineData?.loading);
  }, [onlineData]);

>>>>>>> Stashed changes
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "lightblue",
          height: "30px",
          padding: "20px",
        }}
      >
        <label htmlFor="liveSearch">
          <b>Live Search (Enter any movie/people name):</b>
        </label>
        &nbsp;
        <input
          name="liveSearch"
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder={"Enter title to Search"}
        />
        &nbsp;
        <button className="btn btn-sm btn-primary" onClick={populate}>
          Get List
        </button>
      </div>
      <div
        style={{
          backgroundColor: "beige",
          padding: "10px",
          minHeight: "850px",
        }}
      >
        <h2 style={{ textAlign: "left" }}>
          {loading ? "Loading..." : "Search Result:"}
        </h2>
<<<<<<< Updated upstream
        {onlineData?.d?.map((m: any) => (
          <React.Fragment key={m._id}>
            <img
              style={{ border: "2px solid gold", borderRadius: "5px" }}
              src={m?.i?.imageUrl}
              height={300}
              alt=""
            />
          </React.Fragment>
=======
        {onlineData?.items?.media?.d?.map((m: any) => (
          <MovieCard m={m} key={m.id} />
>>>>>>> Stashed changes
        ))}
      </div>
    </div>
  );
};

export default App;
