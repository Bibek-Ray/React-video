import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Video = ({ apiKey }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=react.js`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiKey]);

  return (
    <div>
      {videos.map(video => (
        <div key={video.id.videoId}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Video;
