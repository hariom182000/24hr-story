import React, { useEffect, useState } from "react";

interface StoryCardProps {
  story: Story | undefined;
  totalStories: number | undefined;
  increaseCounter: (
    totalStories: number | undefined,
    storyIndex: number | undefined,
    groupStoryIndex: number | undefined
  ) => void;
  storyIndex: number | undefined;
  groupStoryIndex: number | undefined;
  setPaused: (paused: boolean) => void;
  paused: boolean | undefined;
  children: React.ReactNode;  
}

const StoryCard: React.FC<StoryCardProps> = ({
  story,
  totalStories,
  increaseCounter,
  storyIndex,
  groupStoryIndex,
  setPaused,
  paused,
  children,  
}) => {
  const [startTime, setStartTime] = useState(0);
  const [pauseTime, setPauseTime] = useState(0);
  const [timeoutValue, setTimeoutValue] = useState(3000);

  useEffect(() => {
    if (paused) {
      return;
    }

    const timeElapsed = pauseTime - startTime;
    if (timeElapsed < 0) {
      increaseCounter(totalStories, storyIndex, groupStoryIndex);
      return;
    }

    setStartTime(Date.now());

    const timer = setTimeout(() => {
      increaseCounter(totalStories, storyIndex, groupStoryIndex);
    }, Math.max(0, timeoutValue - timeElapsed));

    setTimeoutValue((prevTimeoutValue) =>
      Math.max(0, prevTimeoutValue - timeElapsed)
    );

    return () => clearTimeout(timer);
  }, [paused]);

  
  if (!story) return null;

  return (
    <div
      key={storyIndex}
      className="h-full"
      onMouseDown={() => {
        setPauseTime(Date.now());
        setPaused(true);
      }}
      onMouseUp={() => {
        setPaused(false);
      }}
      style={{
        backgroundImage: `url(${story.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    
    </div>
  );
};

export default StoryCard;
