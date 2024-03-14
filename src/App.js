import './App.css';

import Header from './components/Header/Header.js';
import MainVideo from './components/MainVideo/MainVideo.js';
import mainvideos from './data/video-details.json'
import videolist from './data/videos.json'

function App() {

  console.log(mainvideos);
  console.log(videolist);

  return (
    <>
    <Header/>
    <main>
    <MainVideo videoProps = {mainvideos[0]} />
    </main>
    </>
  );
}

export default App;
