import React from 'react'
import Friends from './Friends'
import friends from '../friendsArr'

function Friendlist(){
  const friendArray = friends.map(friend => {
    return <Friends key = {friend.name} age={friend.age} name={friend.name} pets={friend.pets}/>
  })
  return(
    <div className="container">
    
    {friendArray}
    </div>
 )
  
}

export default Friendlist