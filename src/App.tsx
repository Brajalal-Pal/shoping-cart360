import React, { useState } from "react";
import "./App.css";
import { getMovieListByTitle } from "./services/MovieService";

const App = () => {
  const [title, setTitle] = useState("");
  const [onlineData, setOnlineData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const populate = () => {
    setLoading(true);
    // Get list from IMDB online
    getMovieListByTitle(title, (response: any) => {
      setOnlineData(response);
      setLoading(false);
    });
  };

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

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
        {onlineData?.d?.map((m: any) => (
          <React.Fragment key={m._id}>
            <img
              style={{ border: "2px solid gold", borderRadius: "5px" }}
              src={m?.i?.imageUrl}
              height={300}
              alt=""
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default App;
