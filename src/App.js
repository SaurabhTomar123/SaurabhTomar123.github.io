import React from 'react'
import ReactPlayer from 'react-player'
import Texttab from './Texttab';
import './App.css';
//import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';
//import { AudioVisualizer, AudioVisualizerCommonProps } from 'react-audio-visualizers-core';
import Video from "./video.mp4";
import audio from "./audio.mp3";
//import  {VideoDuration}  from './VideoDuration';
import{ useEffect, useState } from "react";
//import Visualizer from './visualizer';
import { WaveformVisualizer, WaveformVisualizerTheme } from 'react-audio-visualizers';


function App() {
//  let media = new Audio({Video});
  //media.onloadedmetadata = function() {
 // media.duration; // this would give duration of the video/audio file
  //console.log(media.duration);
  //};
//alert(Video.duration);
const [visible, setVisible] = useState(true);
const [play,setplay]=useState();
/*useEffect(() => {
  setTimeout(() => {
    setVisible(false);
  }, props.delay);
}, [props.delay]);

return visible ? <Texttab/> : <div />;
*/

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
//<video controls autostart autoPlay src={Video} type="video/mp4" />
//<audio controls autostart autoPlay src ={audio} />