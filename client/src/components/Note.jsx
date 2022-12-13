import React, { Component, useState } from "react";

const colors = ['text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info', 'text-bg-light', 'text-bg-dark'];

function Note(props) {
    let [showToolbar, setShowToolbar] = useState(false);
    let [title, setTitle] = useState(props.title);
    let [content, setContent] = useState(props.text);
    let bgcolor = colors[parseInt(props.color)];
    let className = bgcolor + " " + "card col m-2 p-0"
    const parseTitle = (text, maxLength) => {
        if (text === "") {
            return "(Untitled)";
        }
        else if (text.length > maxLength) {
            return text.substr(0,maxLength).concat("...");
        }
        else {
            return text;
        }
    };
    let newTitle = parseTitle(title, 20);
    let newContent = parseTitle(content, 100);
    const handleMouseEnter = () => {
        setShowToolbar(true);
        // console.log(showToolbar);
    };
    const handleMouseLeave = () => {
        setShowToolbar(false);
        // console.log(showToolbar);
    };
    
    const handleEdit = (noteID) => {
        console.log(noteID, "TODO: Edit note.", bgcolor);
    }
    const handleDelete = (noteID) => {
        console.log(noteID, "TODO: Delete note.");
    }

    let toolboxstyle = {top : "0px", right: "0px", color: "black", margin : "5px", backgroundColor : "rgba(255,255,255,0.2)", transition: 'ease 0.1s', opacity: showToolbar ? '1' : '0'};
    return (
        <div style={{"max-height": "300px", "width" : "300px"}} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card-header">
                <h5 className="card-title">
                    {newTitle}
                </h5>
            </div>
            <div className="card-body"> 
                <p>
                    {newContent}
                </p>
            </div>
            <div class="d-flex flex-column position-absolute border rounded-pill" style={toolboxstyle} >
                <button className="btn btn-link p-1 px-1 text-center" type="button" onClick={(e) => handleEdit(props.noteID)}><i class="bi bi-pencil" style={{color : "black"}}></i></button>
                <button className="btn btn-link p-0 px-1 text-center" type="button" onClick={(e) => handleDelete(props.noteID)}><i class="bi bi-trash" style={{color : "black"}}></i></button>
                <button className="btn btn-link p-0 px-1 text-center" type="button" onClick={(e) => console.log("I do nothing :v")}><i class="bi bi-three-dots" style={{color : "black"}}></i></button>
            </div>
        </div>
    );

}


export default Note;