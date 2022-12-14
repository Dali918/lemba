import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home_feed/Home';
import NotePage from './pages/notepage/NotePage';
import Profile from './pages/profile/Profile';

const router = createBrowserRouter([
  {
    path: "/", element: <Home/>
  },
  {path: "/notes", element: <NotePage/>},
  {path: "/me", element: <Profile/>}
])

function App() {
  const [backEndData, setBackEndData] = useState([{}])

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log(data.users)
        setBackEndData(data)
      })
  }, [])
  
  return (
    // <div>
    //   <ul>
    //     {backEndData.users?.map(user => {
    //       return (
    //         <li>
    //           {user}
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </div>
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}


export default App;
