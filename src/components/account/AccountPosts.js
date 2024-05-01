import React from "react";
import Navigation from "../Navigation";
import { useState } from "react";
import AccountPost from "./AccountPost";

const AccountPosts = ({ profilePic, username }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row w-full justify-between px-8 pb-4 items-center">
          <AccountPost
            title={"Strawberry Dress"}
            postPic={"/patternImgs/strawberryDress.jpg"}
            likes={3}
          />
          <AccountPost
            title={"Winter Hat"}
            postPic={"/patternImgs/puffyHat.jpg"}
            likes={4}
          />
        </div>
        <div className="flex flex-row w-full justify-between px-8 pb-4 items-center">
          <AccountPost
            title={"Striped Pants"}
            postPic={"/patternImgs/pants.jpg"}
            likes={1}
          />
          <AccountPost
            title={"Fire Hat"}
            postPic={"/patternImgs/awesomeHat.webp"}
            likes={2}
          />
        </div>
        <div className="flex flex-row w-full justify-between px-8 pb-4 items-center">
          <AccountPost
            title={"Baby Ducks"}
            postPic={"/patternImgs/ducks.jpg"}
            likes={2}
          />
          <AccountPost
            title={"Beach Dress"}
            postPic={"/patternImgs/dress.jpg"}
            likes={7}
          />
        </div>
        <div className="flex flex-row w-full justify-between px-8 pb-4 items-center">
          <AccountPost
            title={"Thick Scarf"}
            postPic={"/patternImgs/scarf.jpg"}
            likes={1}
          />
          <AccountPost title={"Tied Top"} postPic={"/patternImgs/top.jpg"} likes={3}
 />
        </div>
      </div>
    </>
  );
};

export default AccountPosts;
