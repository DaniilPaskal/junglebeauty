import React, { useState, useEffect } from "react";
import { getList } from "./FirebaseFunctions";
import VideoFrame from "./VideoFrame";

const VideoColumn = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const videos = await getList("Videos-List.json");
    console.log("videos", videos);
    setVideos(videos);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="media-grid">
      {videos.map((video) => {
        return (
          <div key={video.id}>
            <VideoFrame id={video["video-id"]} />
            <p>{video.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default VideoColumn;
