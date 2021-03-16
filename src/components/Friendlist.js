import React from 'react'
import Friends from './Friends'
import friends from '../friendsArr'

function Friendlist(){
  const friendArray = friends.map(friend => {
    console.log(friend.pets[0].breed)
    return <Friends key = {friend.name} age={friend.age} name={friend.name}/>
  })
  return(
    <div>
    {friendArray}
    </div>
 )
  
}

export default Friendlist