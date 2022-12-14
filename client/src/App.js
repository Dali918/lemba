import React, { useEffect, useState } from 'react'
import './App.css';


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
    <div>
      <ul>
        {backEndData.users?.map(user => {
          return (
            <li>
              {user}
            </li>
          )
        })}
      </ul>
    </div>
  );
}


export default App;
