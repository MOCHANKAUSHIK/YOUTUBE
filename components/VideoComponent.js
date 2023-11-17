import { Link } from 'react-router-dom';
const VideoComponent = () => {
  return (
    <div className="video">
      <div className="thumbnail">
        <Link to={'/video'}>
          <img
            alt="thumbnail"
            src={
              "https://i.ytimg.com/vi/vRIJaQsJts8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0Fdw5z2xOA90bkWeP27WxYYOXhw"
            }
            className="thumbnailImage"
          />
        </Link>

      </div>
      <div className="titlewrapper">
        <div className="channelphoto">
          <img
            alt="channelImage"
            src={
              "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj"
            }
            className="channelImage"
          />
        </div>
        <div className="title">
          This is a video Title for my video in youtube
          <div className="channel">KR$NA</div>
          <div className="views">8.1M Views . 1 Year Ago</div>
        </div>
      </div>

    </div>
  );
};

export default VideoComponent;
