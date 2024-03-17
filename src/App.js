import './App.scss';

import Header from './components/Header/Header.js';
import MainVideo from './components/MainVideo/MainVideo.js';
import Comments from './components/Comments/Comments.js'
import VideoList from './components/VideoList/VideoList.js'

import mainVideos from './data/video-details.json'
import videoList from './data/videos.json'

import { useState } from 'react';

function App() {

  const [selectedVideo, setSelectedVideo] = useState(0);

  const handleVideoChange = (index) => {

    setSelectedVideo(index)

}





  return (
    <>
    <Header/>
    <main>
    <MainVideo videoProps = {mainVideos[selectedVideo]} />
    <Comments videoPropsComments = {mainVideos[0].comments} />
    <VideoList videoList = {videoList} 
    handleVideoChange = {handleVideoChange}
    />
    </main>
    </>
  );
}

export default App;
