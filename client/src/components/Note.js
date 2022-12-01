import React, { Component } from "react";

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {title : this.props.title, text : this.props.text, toolbarshow : false};
        this.newTitle = this.parseTitle(this.state.title, 20);
        this.newText = this.parseTitle(this.state.text, 65);
        this.noteID = parseInt(this.props.noteID);
    }
    parseTitle(text, maxLength) {
        if (text === "") {
            return "(Untitled)";
        }
        else if (text.length > maxLength) {
            return text.substr(0,maxLength).concat("...");
        }
        else {
            return text;
        }
    }

    componentDidMount(){
        this.setState((props) => {return {title : props.title, text : props.text}; });
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.title !== this.props.title) {
            this.setState({title : this.props.title});
        }
        if (prevProps.text !== this.props.text) {
            this.setState({text : this.props.text});
        }
    }
    render() {
        const handleMouseEnter = () => {
            this.setState({toolbarshow : true});
            // console.log(this.state.toolbarshow);
        }
        const handleMouseLeave = () => {
            this.setState({toolbarshow : false});
            // console.log(this.state.toolbarshow);
        }
        return (
            <div className="card col m-2 p-0" style={{"max-height": "300px", "width" : "200px"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="card-header">
                    <h5 className="card-title">
                        {this.state.title}
                    </h5>
                </div>
                <div className="card-body"> 
                    <p>
                        {this.state.text}
                    </p>
                </div>
                { this.state.toolbarshow ? <NoteToolbar noteID={this.noteID}></NoteToolbar> :<></>}
            </div>
        );
    }
}

class NoteToolbar extends Component {
    constructor(props) {
        super(props);
        this.noteID = this.props.noteID;
        this.style = {top : "0px", right: "0px", color: "black", margin : "5px", backgroundColor : "rgba(0,0,0,0.2)"}
    }
    handleEdit(noteID) {
        console.log(noteID, "TODO: Edit note.")
    }
    handleDelete(noteID) {
        console.log(noteID, "TODO: Delete note.")
    }
    render() {
        return (<div className="d-flex flex-column position-absolute border rounded-pill" style={this.style} >
            <button className="btn btn-link p-1 px-1 text-center" type="button" onClick={(e) => this.handleEdit(this.noteID)}><i class="bi bi-pencil" style={{color : "black"}}></i></button>
            <button className="btn btn-link p-0 px-1 text-center" type="button" onClick={(e) => this.handleDelete(this.noteID)}><i class="bi bi-trash" style={{color : "black"}}></i></button>
            <button className="btn btn-link p-0 px-1 text-center" type="button" onClick={(e) => console.log("I do nothing :v")}><i class="bi bi-three-dots" style={{color : "black"}}></i></button>
        </div>);
    }
}

export default Note;