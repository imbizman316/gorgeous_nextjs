import Albums from "./components/Albums";
import MainSlide from "./components/MainSlide";
import MembersPics from "./components/MembersPics";
import VideoContainer from "./components/VideoContainer";

export default function Home() {
  return (
    <div className="min-h-screen py-[100px]">
      <MainSlide />
      <VideoContainer />
      <MembersPics />
      <Albums />
    </div>
  );
}
