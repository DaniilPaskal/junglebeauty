import React, { useState, useEffect } from "react";
import { getList } from "./FirebaseFunctions";
import VideoFrame from "./VideoFrame";

const VideoColumn = () => {
    const [videos, setVideos] = useState([]);
    const columnLength = 5;

    const getVideos = async () => {
        const videos = await getList('Videos-List.json');
        setVideos(videos);
    }
    
    useEffect(() => {
        getVideos();
    }, []);
    
    return (
        <div className='video-column'>
            {videos.slice(-columnLength).map((video) => {
                return ( 
                    <div key={video.id}>
                        <VideoFrame id={video['video-id']} />
                        <p>{video.desc}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default VideoColumn;