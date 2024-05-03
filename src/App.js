import './App.scss';
import Header from './components/Header/Header.js';
import MainVideoPage from './pages/MainVideoPage/MainVideoPage.js'
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage.js'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} /> 
        <Route path='/home' element={<MainVideoPage/>} /> 
        <Route path='/video/:videoId' element={<MainVideoPage/>} />
        <Route path='/upload' element={<Navigate to='/upload-video' />} />
        <Route path='/upload-video' element={<VideoUploadPage/>} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
