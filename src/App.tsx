import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features';


const App: React.FC = () => {

  return (<>

    <video id="background-video" autoPlay loop muted src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4" ></video>
    <Navbar  />


    <div style={{display:'flex', flexDirection:'column', paddingLeft:"2rem"}}>
    <h1 className='head'>Experience  Tesla</h1> 
    <p className='head1'>Schedule a Demo Drive Today</p>

      <div style={{display:'flex', justifyContent:"center", marginTop:'18rem'}}>
      <button className='head--button'  >Demo Drive</button>
      </div>
    </div>


      <Features/>    

  </>
  )
}

export default App
