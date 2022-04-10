
import React, { useState } from 'react';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
/**
 * 
 */
const TextForm = (props) => {
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick=()=>{
      let newCase=text.toLocaleUpperCase();
      setText(newCase)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleLowClick=()=>{
        let newCase=text.toLocaleLowerCase();
        setText(newCase)
      }
    const handleOnChange = (event) =>{
      setText(event.target.value)
    }
    return (
     <>
       <div>
    
        <div class="mb-3">
            <h1>{props.heading}</h1>
           
           <textarea className="form-control"  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary" onClick={handleLowClick}>Convert To Lowercase</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
      </div>
      <div className="container my-3 ">
          <h1>Your Text summary </h1>
          <p>{text.split(" ").length} words and {text.length} characters </p>
          <p>{0.008*text.split(" ").length} time to read </p>
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
     </> 
    )
}



export default TextForm;