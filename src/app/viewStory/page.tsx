"use client";
import React, { useState } from "react";
import { getStoriesData } from "../../../components/contexts/StoriesContext";
import StoryCard from "../../../components/StoryCard";

export default function ViewStory() {
  const allStories = getStoriesData();
  const [currentStoryGroupIndex, setCurrentStoryGroupIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  console.log(allStories);

  const increaseCounter = (
    totalStories: number | undefined,
    storyIndex: number | undefined,
    groupStoryIndex: number | undefined
  ) => {
    if (storyIndex != undefined && storyIndex + 1 === totalStories) {
      setCurrentStoryIndex(0);
      if (groupStoryIndex != undefined)
        setCurrentStoryGroupIndex(groupStoryIndex + 1);
    } else {
      if (storyIndex != undefined) {
        setCurrentStoryIndex(storyIndex + 1);
      }
    }
  };

  const renderProgressBars = (allStories:  StoryData[]) => {
    return allStories.map((storyGroup: StoryData, index: number) => {
      if (currentStoryGroupIndex === index) {
        return (
          <div key={index} className="flex mt-4 gap-4">
            {storyGroup.stories?.map((story: Story, storyIndex: number) => (
              <div
                key={storyIndex}
                className="bg-stone-500 h-2 flex-auto rounded-md items-center"
              >
                {storyIndex < currentStoryIndex && (
                  <div className="bg-stone-300 h-2 flex-auto rounded-md"></div>
                )}
                {storyIndex == currentStoryIndex && (
                  <div
                    className="bg-stone-300 h-2 flex-auto rounded-md animate-progress"
                    style={{
                      animationDuration: "3s",
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        );
      }
      return null;
    });
  };

  const renderStories = (allStories: StoryData[]) => {
    return allStories.map((storyGroup: StoryData, index: number) => {
      if (currentStoryGroupIndex === index) {
        return storyGroup.stories?.map((story: Story, storyIndex: number) => {
          if (currentStoryIndex === storyIndex) {
            return (
              <StoryCard
                story={story}
                totalStories={storyGroup.stories?.length}
                increaseCounter={increaseCounter}
                storyIndex={storyIndex}
                groupStoryIndex={index}
                setPaused={setPaused}
                paused={paused}
              >
                <div className="min-h-12 py-8 px-4" key={storyIndex}>
                  {renderProgressBars(allStories)}
                </div>
              </StoryCard>
            );
          }
          return null;
        });
      }
      return null;
    });
  };

  return <div className="w-full h-full">{renderStories(allStories)}</div>;
}
