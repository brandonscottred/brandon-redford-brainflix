import HeroVideo from '../../components/HeroVideo/HeroVideo.js';
import Comments from '../../components/Comments/Comments.js'
import VideoList from '../../components/VideoList/VideoList.js'
import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios'

const baseUrl = 'http://localhost:8080/'

function MainVideoPage() {
    const [state, setState] = useState({ heroVideo:null, videoList:[] });
    const { videoId } = useParams();

    const fetchMainVideo = (videoId) => {
        axios.get(`${baseUrl}videos/${videoId}`)
          .then(response => {
            setState(oldState => ({
              ...oldState,
              heroVideo: response.data
            }));
          })
      };

     useEffect(() => {
        const fetchVideoList = () => {
          axios.get(`${baseUrl}videos`)
            .then(response => {
              setState({ ...state, videoList: response.data });
              const heroId = response.data[0].id;
              fetchMainVideo(heroId);
            })
        };
      
        fetchVideoList();
      }, []);

    useEffect(() => {
        if(videoId) {
            fetchMainVideo(videoId); 
        }
    }, [videoId]);

    console.log('state', state);
    return(
        <>
            <HeroVideo heroVideo={state.heroVideo} />
            <section className='desktop-sidebar'>
            <Comments comments={state.heroVideo?.comments || []} heroVideoInfo={state.heroVideo || []}  />
            <VideoList videoList={state.videoList}/> 
            </section>
        </>
    )
  }
;

export default MainVideoPage;