import React from "react";
import { useState } from "react";

const colors = ['text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info', 'text-bg-light', 'text-bg-dark'];

function NoteSpace(props) {
    let notes = [];
    let [editingNote, setEditingNote] = useState(false);
    let [activeNote, setActiveNote] = useState(false);
    
    const handleEdit = (noteID) => {
        console.log(noteID);
        setEditingNote(true);
        setActiveNote(noteID);
    }
    const handleClose = (e) => {
        e.preventDefault();
        setEditingNote(false);
        setActiveNote(false);
    }

    // Note component
    function Note(props) {
        let [showToolbar, setShowToolbar] = useState(false);
        let [title, setTitle] = useState(props.note.title);
        let [content, setContent] = useState(props.note.text);
        let bgcolor = colors[parseInt(props.note.color)];
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
        
        const handleDelete = (noteID) => {
            window.confirm("Do you want to delete this note?");
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
                <div class="d-flex flex-column position-absolute border rounded-pill" style={toolboxstyle}  >
                    <button className="btn btn-link p-1 px-1 text-center" type="button" onClick={(e) => handleEdit(props.note)}><i class="bi bi-pencil" style={{color : "black"}}></i></button>
                    <button className="btn btn-link p-0 px-1 text-center" type="button" onClick={(e) => handleDelete(props.note)}><i class="bi bi-trash" style={{color : "black"}}></i></button>
                    <button className="btn btn-link p-0 px-1 text-center" type="button" onClick={(e) => console.log("I do nothing :v")}><i class="bi bi-three-dots" style={{color : "black"}}></i></button>
                </div>
            </div>
        );
    
    }

    function NoteEditor(props) {
        let style = {resize: "none"};
        let colorpalette = []
        colors.forEach((color, index) => {
            let p_style = "flex-grow-1 mx-2 btn btn-primary " + color;
            if (colors[parseInt(activeNote.color)] === color) {
                colorpalette.push(
                    <a className={p_style} disabled onClick={(e) => changeColor(e, index)}>Selected</a>
                );
            }
            else {
               colorpalette.push(
                <a className={p_style} onClick={(e) => changeColor(e, index)}></a>
                ); 
            }
            
        });

        const changeTitle = (e, title) => {
            
            setActiveNote({noteID : activeNote.noteID, "title": title, text: activeNote.text, color: activeNote.color})
        };
        const changeText = (e, text) => {
            setActiveNote({noteID : activeNote.noteID, title: activeNote.title, "text": text, color: activeNote.color})
        };
        const changeColor = (e, color) => {
            setActiveNote({noteID : activeNote.noteID, title: activeNote.title, "text": activeNote.text, "color": color})
        };

        let currentNote = activeNote;
        return (<div class="border px-4 py-2 rounded d-flex flex-column flex-grow-1">
            <form class="d-flex flex-column flex-grow-1 h-auto">
                <div class="m">
                    <h5 class="ms-2 mt-2">Background colors:</h5>
                    <div class="mb-3 border rounded-pill d-flex flex-row flex-grow-1 justify-content-evenly p-2">
                        {colorpalette}
                    </div>
                </div>
                <div class="mb-0">
                    <input type="text" class="fs-3 my-2 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="A new adventure..." value={currentNote.title} /*onChange={(e) => changeTitle(e, e.target.value)}*//>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="d-flex mb-3 flex-grow-1 rounded-bottom">
                    <textarea class="form-control d-flex" aria-label="With textarea" style={style} placeholder='Today was a good day because...' value={currentNote.text}></textarea>
                </div>
            </form>
        </div>);
    }

    if (Array.isArray(props.notes) && props.notes) {
        props.notes.forEach(element => {
            notes.push(
                <Note note={element}></Note>
            )
        });
    }

    if (notes.length > 0) {
        return (<div class="card-group" className=" d-flex flex-row flex-wrap row row-cols-auto border border-gray rounded m-3 p-3" style={{flex: 9}}>
            {editingNote? <NoteEditor></NoteEditor> : <></>}
            {editingNote? <div class="m-2">
                <a className="btn btn-outline-warning" onClick={handleClose.bind()}>Exit</a>
            </div> : <></>}
            {editingNote? <></> : notes}
        </div>)
    }

    else {
        return (<div className="d-flex flex-1 flex-row flex-wrap flex-fill border border-gray rounded text-center h justify-content-center m-3 p-3" style={{flex: 9}}>
            <p>Sorry, it seems like you have not made any notes yet..</p>
            <a className="text-decoration-none" href="#">Let's get you started!</a>
        </div>)
    }
    
}

export default NoteSpace;