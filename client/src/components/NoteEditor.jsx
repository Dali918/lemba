import React from "react";

const colors = ['btn-primary', 'btn-secondary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-info', 'btn-light', 'btn-dark'];

function NoteEditor(props) {
    let style = {resize: "none"};
    let colorpalette = []
    colors.forEach((color) => {
        let p_style = "btn btn-primary " + color;
        colorpalette.push(
            <a className={p_style}></a>
        );
    });

    return (<div class="border px-4 py-2 rounded d-flex flex-column flex-grow-1">
        <form class="d-flex flex-column flex-grow-1 h-auto">
            <div class="mb-3">
                <h5 class="ms-2 my-2">Background colors:</h5>
                <div class="my-3 border rounded-pill d-flex flex-row flex-grow-1 justify-content-evenly p-2">
                    {colorpalette}
                </div>
            </div>
            <div class="mb-0">
                <input type="email" class="my-2 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="A new adventure..."/>
                {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div class="d-flex mb-3 flex-grow-1 rounded-bottom">
                <textarea class="form-control d-flex" aria-label="With textarea" style={style} placeholder='Today was a good day because...'></textarea>
            </div>
        </form>
    </div>);
}

export default NoteEditor;