import React, { useState } from "react";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faClock,
  faChartSimple,
  faXmarksLines,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HomePost from "./HomePost";
import { Link, useLocation, useParams } from "react-router-dom";

const Pattern = () => {
  let location = useLocation();
  let {
    username,
    img,
    title,
    profilePic,
    rating,
    time,
    difficulty,
    stitch,
    color,
  } = location.state;
  console.log(JSON.stringify(location, null, 2));

  const wholeStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);
  const starStyle = {
    stroke: "black",
    strokeWidth: 30,
  };

  return (
    <>
      <div className="flex flex-col pb-4">
        <h1 className="pt-8 pb-4 text-2xl text-black font-bold text-center underline">
          {username}'s {title}
        </h1>
        <img src={img} className="w-3/4 mx-auto rounded-2xl pt-2 pb-2" />
        <div className="flex items-center justify-center">
          {[...Array(wholeStars)].map((e, i) => (
            <FontAwesomeIcon
              className="pl-1/2 pr-1"
              key={i}
              icon={faStar}
              color="gold"
              style={starStyle}
              size="lg"
            />
          ))}
          {halfStar && (
            <FontAwesomeIcon
              className="pl-1/2"
              icon={faStarHalfAlt}
              color="gold"
              style={starStyle}
              size="lg"
            />
          )}
          {[...Array(emptyStars)].map((e, i) => (
            <FontAwesomeIcon
              className="pl-1/2"
              key={i + wholeStars + (halfStar ? 1 : 0)}
              icon={["far", "star"]}
              color="gray"
              style={starStyle}
              size="lg"
            />
          ))}
        </div>
        <div className="pl-2 text-sm text-center pt-1">
          {rating} stars based on 1234 reviews
        </div>

        <div className="pt-2">
          <table className="table-auto mx-auto pt-2">
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center font-semibold">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  {time} hours
                </td>
                <td className="border px-4 py-2 text-center font-semibold">
                  <FontAwesomeIcon icon={faChartSimple} className="mr-2" />
                  {difficulty}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center font-semibold">
                  <FontAwesomeIcon icon={faXmarksLines} className="mr-2" />
                  {stitch} stitches
                </td>
                <td className="border px-4 py-2 text-center font-semibold">
                  <FontAwesomeIcon icon={faPalette} className="mr-2" />
                  {color} color(s)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Pattern;
