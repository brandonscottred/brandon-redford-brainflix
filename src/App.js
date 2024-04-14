import './App.scss';
import Header from './components/Header/Header.js';
import MainVideoPage from './pages/MainVideoPage/MainVideoPage.js'
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage.js'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";


const api_key = '?api_key=9b674019-74cc-4013-9aa2-3645aa0e289c';
const base_url = 'https://project-2-api.herokuapp.com';

function App() {
  
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} /> 
        <Route path='/home' element={<MainVideoPage/>} /> 
        <Route path='/video/:videoId' element={<MainVideoPage/>} />
        <Route path='/upload-video' element={<VideoUploadPage/>} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
