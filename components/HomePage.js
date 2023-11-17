import HeaderComponent from "./HeaderComponent";
import "./HomePage.css";
import VideoComponent from "./VideoComponent";

const HomePage = () => {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <div className="main">
        <div className="sidebar">
          <div className="sidebarItem">Home</div>
          <div className="sidebarItem">Channels</div>
          <div className="sidebarItem">Videos</div>
          <div className="sidebarItem">Liked Videos</div>
        </div>
        <div className="videos">

          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
          <VideoComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
