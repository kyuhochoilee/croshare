import React from "react";
import Navigation from "../Navigation";
import Review from "./Review";
import { Link, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const ReviewsPage = () => {
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

  return (
    <div>
      <Link
        to={"/pattern"}
        state={{
          username: username,
          img: img,
          title: title,
          profilePic: profilePic,
          rating: rating,
          time: time,
          difficulty: difficulty,
          stitch: stitch,
          color: color,
        }}
        className="absolute top-0 left-0 p-3"
      >
        <FontAwesomeIcon icon={faAngleLeft} className="text-gray-500" />
      </Link>
      <h1 className="text-2xl font-bold mb-4 pt-3 text-center">
        {title} Reviews
      </h1>
      <Review
        title={"A fire hat indeed!"}
        reviewPic={"/patternImgs/awesomeHat.webp"}
        reviewTime={"1 week ago"}
        description={
          "Very easy to use pattern, and it came out fireeee! Would reccomend to others"
        }
        time={3}
        difficulty={"Beginner"}
        username={"alyanton"}
        profilePic={"/quinnpfp.jpg"}
      ></Review>
      <Review
        title={"Loved it!"}
        reviewPic={""}
        reviewTime={"3 weeks ago"}
        description={"Epic pattern. Will be wearing a ton!"}
        time={5}
        difficulty={"Intermediate"}
        username={"quinnliu"}
        profilePic={"/quinnpfp.jpg"}
      ></Review>
      <Review
        title={"Kind of difficult"}
        reviewPic={""}
        reviewTime={"4 weeks ago"}
        description={
          "Definitely not for beginners, but I was able to figure it out and learned some things along the way! Will be wearing"
        }
        time={4}
        difficulty={"Intermediate"}
        username={"kyuholee"}
        profilePic={"/quinnpfp.jpg"}
      ></Review>
      <Review
        title={"Loved it!"}
        reviewPic={"/patternImgs/awesomeHat.webp"}
        reviewTime={"9 weeks ago"}
        description={
          "Easy peasy fire hat squeezy. Feelin like lightnight mcqueen in this thing"
        }
        time={2}
        difficulty={"Beginner"}
        username={"diannatr"}
        profilePic={"/quinnpfp.jpg"}
      ></Review>
      <Review
        title={"Not my fave"}
        reviewPic={""}
        reviewTime={"13 weeks ago"}
        description={
          "Not my favorite pattern, but was a good challenge. Would reccommend for more experienced ppl, but with enough youtube tutorials anything is possible!"
        }
        time={8}
        difficulty={"Hard"}
        username={"mainaiya"}
        profilePic={"/quinnpfp.jpg"}
      ></Review>
    </div>
  );
};

export default ReviewsPage;
