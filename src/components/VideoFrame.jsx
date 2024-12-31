const VideoFrame = ({ id }) => {
  return (
    <div className="video-frame-container">
      <iframe
        className="video-frame"
        src={"https://www.youtube.com/embed/" + id}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  );
};

export default VideoFrame;
