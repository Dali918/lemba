import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import NoteSpace from "../../components/Notespace";

let navItems = [
    {linkname: "Home", link: "/", linkicon: "bi-house-heart"},
    {linkname: "Bell", link: "/", linkicon: "bi-bell"},
    {linkname: "Saved notes", link: "/", linkicon: "bi-bookmark" }
  ];
  
  let user = {
    name : "John doe",
    style : "background-color: green;",
    profile : "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
  }
  
  let notes = [
    {
      noteID: "1",
      title: "Hello World!",
      text: "Hello there, I am using WhatsApp, how are you today?",
      color: "1",
    },
    {
      noteID: "2",
      title: "Hello Willy!",
      text: "Hello there, I am using WhatsApp, how are you today?",
      color: "4",
    }
  ]
  
function NotePage(props) {
    return (
        <div>
            <header>
                <Topbar/>
            </header>
            <body >
                <div className="d-flex flex-row">
                    <Sidebar className='p-2'></Sidebar>
                    <NoteSpace className='p-2' notes={notes}></NoteSpace>
                </div>
            </body>
            <footer>
                <div className='footer align-items-center text-center bottom-0'>
                <p>Lemba (c) 2022</p>
                </div>
            </footer>
        </div>
    )
}

export default NotePage;