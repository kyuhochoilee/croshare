import React, { useState } from "react";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HomePost from "./HomePost";
import { Link, useLocation, useParams } from "react-router-dom";

const Pattern = () => {
  let location = useLocation();
  let { username, img, title, profilePic, rating, time, difficulty, stitch } = location.state;
  return (
    <>
      <div className="flex flex-col w-1/2 pb-4">
        <h1>
          Username: {username}
        </h1>
        <h1>
          Title: {title}
        </h1>
        <h1>
          img: {img}
        </h1>
        <h1>
          profilePic: {profilePic}
        </h1>
        <h1>
          rating: {rating}
        </h1>
        <h1>
          difficulty: {difficulty}
        </h1>
        <h1>
          time: {time}
        </h1>
        <h1>
          stitch: {stitch}
        </h1>
      </div>
    </>
  );
}

export default Pattern;
