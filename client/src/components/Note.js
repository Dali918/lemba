import React, { Component } from "react";

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {title : this.props.title, text : this.props.text};
        this.newTitle = this.parseTitle(this.state.title, 20);
        this.newText = this.parseTitle(this.state.text, 65)
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
        return (<div className="card col m-2 p-0" style={{"max-height": "300px", "width" : "200px"}}>
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
        </div>);
    }
}

export default Note;