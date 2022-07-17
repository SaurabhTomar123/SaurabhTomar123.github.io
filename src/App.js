import React from 'react'
import ReactPlayer from 'react-player'
import Texttab from './Texttab';
import './App.css';

import audio from "./audio.mp3";
import{ useEffect, useState } from "react";
import { WaveformVisualizer, WaveformVisualizerTheme } from 'react-audio-visualizers';


function App() {

const [visible, setVisible] = useState(true);
const [play,setplay]=useState();


const deleteTab =(data)=>{
  
}
const addTab= ()=>{

}


  return (
    <div className="App">
     Youtube Caption
     <div className='caption'>
    <Texttab ></Texttab>
      caption
      </div>
      <ReactPlayer onclick={play} url='https://www.youtube.com/watch?v=r5P-f5arPXE' className='player'/>
      <div className='visualizer'>audio transquilizer
      <WaveformVisualizer 
      className="Wave"
      refreshRate={0.0500}
    audio={audio}
    
    playing ={false}
    setplay="false"
    theme={WaveformVisualizerTheme.line}
    
  />
      </div>
     
    </div>
  );
}
export default App;
