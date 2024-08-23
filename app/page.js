"use client";

import Albums from "./components/Albums";
import MainSlide from "./components/MainSlide";
import MembersPics from "./components/MembersPics";
import NewsletterSubcribe from "./components/NewsletterSubcribe";
import StickyNavbar from "./components/FrontendPractice/StickyNavbar";
import TopMore from "./components/FrontendPractice/TopMore";
import VideoContainer from "./components/VideoContainer";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { showMore } = useTheme();

  return (
    <div className="min-h-screen py-[100px]">
      {/* {showMore && <TopMore />} */}
      <MainSlide />
      {/* <StickyNavbar /> */}
      <NewsletterSubcribe />
      <VideoContainer />
      <MembersPics />
      <Albums />
    </div>
  );
}
