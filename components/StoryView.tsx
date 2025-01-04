import React from "react";

interface StoryViewProps {
  storyData: StoryData;
}

const StoryView: React.FC<StoryViewProps> = ({ storyData }) => {
  return <div className="bg-slate-500 w-28 h-28"></div>;
};

export default StoryView;
