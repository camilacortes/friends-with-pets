import React from 'react'
import Pet from './Pet';

function Friends(props){
  console.log(props.pets, 111)
  const petInformation = props.pets.map(function  (friend){
    return <Pet  name={friend.name} breed={friend.breed}/>
  })

  return(
    <div className="box">
    <h1 className="owner-name">Owner: {props.name}</h1>
    <h1 className="owner-age">Age: {props.age}</h1>
    {petInformation}
    </div>
  )
}

export default Friends;