import React from 'react'

function Friends(props){
  return(
    <div className="box">
    
    <h1>Owner: {props.name}</h1>
    <h1>Age: {props.age}</h1>
    </div>
  )
}

export default Friends;