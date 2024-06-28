import Albums from "./components/Albums";
import MainSlide from "./components/MainSlide";
import MembersPics from "./components/MembersPics";
import NewsletterSubcribe from "./components/NewsletterSubcribe";
import VideoContainer from "./components/VideoContainer";

export default function Home() {
  return (
    <div className="min-h-screen py-[100px]">
      <MainSlide />
      <NewsletterSubcribe />
      <VideoContainer />
      <MembersPics />
      <Albums />
    </div>
  );
}
