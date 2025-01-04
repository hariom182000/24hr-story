"use client";
import React, { useContext, useState } from "react";
import AddStory from "./AddStory";
import { useRouter } from "next/navigation";
import { getStoriesData } from "./contexts/StoriesContext";

export default function StoryBar() {
  const allStories = getStoriesData();
  const router = useRouter();
  return (
    <div className="flex p-2 items-center">
      <AddStory />
      {allStories.map((s, index) => (
        <div
          key={index}
          className="flex justify-center items-center rounded-full border-2 border-black w-12 h-12 mx-2"
          onClick={() => {
            router.push("/viewStory");
          }}
        ></div>
      ))}
    </div>
  );
}
