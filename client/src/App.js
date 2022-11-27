import React, { useEffect, useState } from 'react'

export default function App() {
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
    <ul>
      {backEndData.users?.map(user => {
        return (
          <li>
            {user}
          </li>
        )
      })}
    </ul>
  )
}
