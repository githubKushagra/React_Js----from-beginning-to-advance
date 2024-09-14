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
    
    // this is the state and here text is the state
    // text is storing the value of textarea
    // setText is used to update the value of text whenever the content of textarea gets changed
    // useState("Enter the text here...") :- default value of text will be "Enter the text here..."
    const [text , setText] = useState("Enter the text here...")
    
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-2">
                <textarea className="form-control" id="my-box" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>

            <div>
                <button className="btn btn-primary" onClick={handleOnUpperCase}>Change to UpperCase</button>
                <button className="btn btn-primary ms-2" onClick={handleOnLowerCase}>Change to LowerCase</button>
            </div>


            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>
                    {/* it is checking if our text is empty(don't care of spaces, there can be multiple spaces but no word(Note :- spaces will be counted as character)) then show 0 else show no. of word */}
                    {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
                </p>
                <p>
                    {0.008 * text.trim().split(" ").length} Minutes required to read the text
                </p>
                <h2>Preview</h2>
                <p style={{ textAlign: 'justify' }}>
                    {text}
                </p>
            </div>
        </>
    )
}