import React from "react";
import Navigation from "../Navigation";
import FriendPost from "./FriendPost";

const FriendFeed = ({ profilePic, username }) => {
  return (
    <>
      <div className="flex flex-col py-20 px-8">
        <div className="fixed inset-x-8 top-0 bg-white">
          <p className="text-2xl font-bold pt-4 pb-3">Friends</p>
        </div>

        <div>
          <FriendPost
            title={"Made this dress for the beach!"}
            postPic={"/patternImgs/dress.jpg"}
            postTime={"4 min ago"}
            description={
              "I think it came out super cute. Kind of difficult in the beginning, but made do and learned some new stitches along the way!"
            }
            profilePic={"/quinnpfp.jpg"}
            username={"alyanton"}
          />

          <FriendPost
            title={"Quinnliu started making Striped Pants"}
            postPic={"/awesomeHat.webp"}
            postTime={"45 min ago"}
            description={
              "I really like this hat. This hat is awesome. I really like the flames, I feel like lightning mcqueen."
            }
            profilePic={"/quinnpfp.jpg"}
            username={"quinnliu"}
          />

          <FriendPost
            title={"Look at this cool hat I made!"}
            postPic={"/patternImgs/awesomeHat.webp"}
            postTime={"2 hr ago"}
            description={
              "I really like this hat. This hat is awesome. I really like the flames, I feel just like lightning mcqueen."
            }
            profilePic={"/quinnpfp.jpg"}
            username={"quinnliu"}
          />

          <FriendPost
            title={"kyuholee made progress on Winter Scarf"}
            postPic={"/awesomeHat.webp"}
            postTime={"6 hr ago"}
            description={""}
            profilePic={"/quinnpfp.jpg"}
            username={"quinnliu"}
          />
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0">
        <Navigation />
      </div>
    </>
  );
};

export default FriendFeed;
