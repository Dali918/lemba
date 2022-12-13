import React from "react";
import Note from "./Note";
import NoteEditor from "./NoteEditor";

function NoteSpace(props) {
    let notes = [];
    if (Array.isArray(props.notes) && props.notes) {
        props.notes.forEach(element => {
            notes.push(<Note title={element.title} text={element.text} noteID={element.noteID} color={element.color}></Note>)
        });
    }
    if (notes.length > 0) {
        return (<div class="card-group" className=" d-flex flex-row flex-wrap row row-cols-auto border border-gray rounded m-3 p-3" style={{flex: 9}}>
            <NoteEditor></NoteEditor>
            {notes}
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