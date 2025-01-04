"use client";
import { getStoryContext } from "../../components/contexts/StoriesContext";
import "./globals.css";

const allStories: StoryData[] = [
  {
    stories: [
      { image: "/cofe.jpeg" },
      { image: "/Curtain.jpeg" },
    ],
  },
  { stories: [{ image: "/pizza.jpeg" }] },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const StoryContext = getStoryContext();
  return (
    <StoryContext.Provider value={allStories}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryContext.Provider>
  );
}
