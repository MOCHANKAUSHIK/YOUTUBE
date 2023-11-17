import HeaderComponent from "./HeaderComponent";
import "./VideoPage.css";


function SuggestedVideo(){
  return (<>
    <div className='suggested-video'>
      <div className='suggestion-image'>
        <img src="https://i.ytimg.com/vi/cUfTYaVEnoA/maxresdefault.jpg" width={'230px'} />
      </div>
      <div className='suggestion-content'>
        <div class="video-info">
            <p class="video-sug-title">
              Kalank Title Track - Lyrical | Alia Bhatt
            </p>
            <p class="margin-0 smaller-fontsize">T-Series</p>
            <p class="margin-0 smaller-fontsize">230M views . 4 years ago</p>
        </div>
      </div>
    </div>
  </>);
}

const VideoPage = () => {
  return (
    <div className="wrapper-video">
      <HeaderComponent />
      <div className="main-video">
        <div className="videoWrapper">
        <iframe width="100%" height="600px" src="https://www.youtube.com/embed/vRIJaQsJts8?si=FCPEKc1Y2NnVh8Wy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="title-video"> This is the title fo the page</div>
          <div className="channelWrapper">
            <div className="channel-video">
              <img
                src={
                  "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj"
                }
                className="channelImage"
              />
            </div>
            <div className="likesWrappper"></div>
          </div>
        </div>
        <div className="suggestions">
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          <SuggestedVideo />
          
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
