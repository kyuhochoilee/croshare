import React, { useState } from "react";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HomePost from "./HomePost";
import { Link, useLocation, useParams } from "react-router-dom";

function Pattern() {
  const location = useLocation();
  console.log(location.state.username);
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div className="flex flex-col w-1/2 pb-4">
        {/* <h1>
        {user}'s {title}
        </h1> */}
        {/* <img
          src={img}
          alt={title}
          style={{ width: "100px", height: "100px", borderRadius: "10px" }}
        /> */}
      </div>
    </>
  );
}

export default Pattern;
