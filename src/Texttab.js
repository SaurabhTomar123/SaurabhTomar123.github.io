import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const Texttab = () => {
const [caption, setcaption] = useState("");
let sendCaption = caption;
const [startDuration,setstartDuration]=useState("");
const [endDuration,setendDuration]=useState("");


const DeleteCaps= ()=>{
        setcaption("");
        sendCaption="";
        setendDuration("");
        setstartDuration("");
}
return (
	<div>
	<h2>Caption</h2>
	<TextField
		value={caption}
		label="enter caption"
		onChange={(e) => {
		setcaption(e.target.value);

		}}
	/>
    <TextField
        value={startDuration}
        label="0:00"
        onChange={(e)=>{
        if(1){
            setstartDuration(e.target.value);
        }
        }}


    />
      <TextField
        value={endDuration}
        label="0:00"
        onChange={(e)=>{
           if(1){
            setendDuration((e.target.value));
           } 
        }}


    />
    <button onClick={DeleteCaps}>Delete</button>
	<h3>Your Enter Value is: {caption} </h3>
    <h3>{sendCaption} </h3>

	</div>
);
};

export default Texttab;
