import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

const View = ({ items, id }: any) => {
  const result = items?.filter((item: any) => item?.id === id);

  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            height: "600px",
          }}
        >
          <img
            src={`${
              result[0]?.i?.imageUrl
                ? result[0]?.i?.imageUrl
                : "/img/not-found.png"
            }`}
            alt=""
            height={600}
          />
        </div>
        <div
          style={{
            display: "inline-block",

            marginLeft: "30px",
            marginTop: "30px",
            verticalAlign: "top",
            padding: "10px",
          }}
        >
          <div>Title: {result[0]?.l}</div>
          <div>Category: {result[0]?.q}</div>
          <div>Year: {result[0]?.y}</div>
          <div>Character: {result[0]?.s}</div>
          <br />
          <br />
          <Link to={"/"}>Back to Main Page</Link>
        </div>
      </div>
    </React.Fragment>
  );
};
const PosterDetail = (props: any) => {
  const { id } = useParams();

  const { items } = useSelector((state: any) => state.movieReducer);

  return (
    <React.Fragment>
      <View items={items.media.d} id={id} />
    </React.Fragment>
  );
};

export default PosterDetail;
