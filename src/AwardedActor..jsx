import React, { useEffect, useState } from "react"

const UsingFetch = () => {
  
  const [users, setUsers] = useState([])

  const  fetchData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e1f7b33debmshcc5d333e9b8a80cp12e0ddjsn8e901ec4f4b7',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    fetch("https://imdb8.p.rapidapi.com/actors/get-awards?nconst=nm0001667", options)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.resource.awards)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
     
      { 
      
        <ol>
          {users.map(user => (
            <li key={user.eventid} style={{listStyle:"none"}}>{user.nominations.names[0].akas}</li>
           
          ))}
          
        </ol>
        
      }
    </div>
  )
}

export default UsingFetch