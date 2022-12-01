import logo from './logo.svg';
import NavBar from './components/NavBar';
import Notespace from './components/Notespace'
import './App.css';

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
  },
  {
    noteID: "2",
    title: "Hello World!",
    text: "Hello there, I am using WhatsApp, how are you today?",
  }
]

function App() {
  return (
    <div>
      <header>
        <NavBar classname=" position-sticky" links={navItems} user={user}></NavBar>
      </header>
      <body >
        <Notespace notes={notes}></Notespace>
      </body>
      <footer>
        <div className='footer align-items-center text-center bottom-0'>
          <p>Lemba (c) 2022</p>
        </div>
      </footer>
    </div>
  );
}


export default App;
