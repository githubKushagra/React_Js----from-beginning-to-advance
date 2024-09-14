import React from 'react';
import {useState} from 'react';
// import PropsTypes from 'prop-types'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        console.log("On Change...");
        setText(event.target.value);
    }

    const handleOnUpperCase = () => {
        console.log("On Click...");
        const newText = text.toUpperCase();
        setText(newText);
    }


    const handleOnLowerCase = () => {
        console.log("On Click...");
        const newText = text.toLowerCase();
        setText(newText);
    }


    const handleOnClearText = () => {
        console.log("On Click...");
        setText("");
    }



    const handleOnSpeak = () => {
        console.log("On Click...");

        // create a msg object and assign a class classed SpeechSynthesisUtterance() 
        // This creates a new instance of the SpeechSynthesisUtterance object.
        // The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request, containing the text that should be spoken and other settings such as language and pitch.
        const msg = new SpeechSynthesisUtterance();

        // This assigns the value of the text variable to the text property of the SpeechSynthesisUtterance object msg.The text property specifies the text that will be synthesized into speech.
        msg.text = text;


        msg.onstart = () => {
            alert("Speak session has started")
        }

        msg.onend = () => {
            alert("Speak session has ended")
        }

        // This line sends the msg object (the SpeechSynthesisUtterance instance) to the browser’s speechSynthesis engine to be spoken aloud.
        // The speechSynthesis.speak() method is part of the Web Speech API, and it starts the process of converting the text into spoken words.
        window.speechSynthesis.speak(msg);

    }



    const handleOnSpeakPause = () => {
        console.log("On Click...");

        // to stopped the speech
        window.speechSynthesis.pause();
    }



    const handleOnSpeakResume = () => {
        console.log("On Click...");

        // to resume the speech that we have stoped
        window.speechSynthesis.resume();
    }



    const handleOnStopSpeak = () => {
        console.log("On Click...");

        // to cancel the speech
        window.speechSynthesis.cancel();
    }



    const handleOnReverseTheText = () => {
        console.log("On Click...");
        // to reverse the text
        var newReversedText = "";
        for(var i = text.length-1 ; i>=0 ; i--) {
            newReversedText += text[i];
        }
        setText(newReversedText);
    }


    
    // this is the state and here text is the state
    // text is storing the value of textarea
    // setText is used to update the value of text whenever the content of textarea gets changed
    // useState("Enter the text here...") :- default value of text will be "Enter the text here..."
    var [text , setText] = useState("")
    
    return (
        <>
            <h2>{props.heading}</h2>
            <div className="mb-2">
                <textarea className="form-control" id="my-box" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>

            <div>
                <button className="btn btn-primary" onClick={handleOnUpperCase}>Change to UpperCase</button>
                <button className="btn btn-primary ms-2" onClick={handleOnLowerCase}>Change to LowerCase</button>
                <button className="btn btn-primary ms-2" onClick={handleOnClearText}>Clear Text</button>
                <button className="btn btn-primary ms-2" onClick={handleOnSpeak}>Speak</button>
                <button className="btn btn-primary ms-2" onClick={handleOnSpeakPause}>Speak Pause</button>
                <button className="btn btn-primary ms-2" onClick={handleOnSpeakResume}>Speak Resume</button>
                <button className="btn btn-primary ms-2" onClick={handleOnStopSpeak}>Stop Speak</button>
                <button className="btn btn-primary ms-2" onClick={handleOnReverseTheText}>Reverse the Text</button>
            </div>


            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>
                    {/* it is checking if our text is empty(don't care of spaces, there can be multiple spaces but no word(Note :- spaces will be counted as character)) then show 0 else show no. of word */}
                    {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
                </p>
                <p>
                    {text.trim().length === 0 ? 0 : 0.008 * text.trim().split(/\s+/).length} Minutes required to read the text
                </p>
                <h2>Preview</h2>
                <p style={{ textAlign: 'justify' }}>
                    {text}
                </p>
            </div>
        </>
    )
}