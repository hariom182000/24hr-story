'use client'
import { createContext, useContext } from "react";

const allStories: StoryData[] = [];

const StoryContext = createContext(allStories);

export function getStoriesData() {
  return useContext(StoryContext);
}

export function getStoryContext() {
  return StoryContext;
}
