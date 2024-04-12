import HeroVideo from '../../components/HeroVideo/HeroVideo.js';
import Comments from '../../components/Comments/Comments.js'
import VideoList from '../../components/VideoList/VideoList.js'
import { useState, useEffect } from 'react'; 
import { useParams, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'

const baseUrl = 'https://project-2-api.herokuapp.com/'
const apiKey = '?api_key=9b674019-74cc-4013-9aa2-3645aa0e289c'

// this is working- lines 13-16
axios.get(`${baseUrl}videos${apiKey}`)
    .then((response) => {
        console.log(response);
    })

function MainVideoPage() {
    const [heroVideo, setHeroVideo] = useState([]);
    const [videoList, setVideoList] = useState([])
    const { videoId } = useParams();

    // dynamic route
    useEffect(() => {
        const fetchMainVideo = async () => {
            const response = await axios.get(`${baseUrl}videos/${videoId}${apiKey}`);
            console.log(response)
            setHeroVideo(response.data);
        }; fetchMainVideo(); }, [videoId]);

        // // use params
        // const handleVideoChange = async () => {
        // axios.get(`${baseUrl}videos/:videoId${apiKey}`).then((response) => {
        //     setHeroVideo(response)
        // })}, [videoId]);    

    // how do I get this in a variable to then pass to other components?
    useEffect(() => {
        const fetchVideoList = async () => {
        const response = await axios.get(`${baseUrl}videos${apiKey}`);
            console.log(response)
            setVideoList(response.data);
        }; fetchVideoList();   
     }, []);

    // before I had = (index) => {response(index)};
    
    return(
        <>
            <HeroVideo/>
            <section className='desktop-sidebar'>
            <Comments/>
            <VideoList/>
            </section>
        </>
    )
  }
;

export default MainVideoPage;