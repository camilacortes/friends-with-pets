import React from 'react';

function Pet(props){
  console.log(props, 222)
  return(
    <div>
    <h1 className="pet-name">Pet Name: {props.name}</h1>
    <h1 className="pet-breed">Breed: {props.breed}</h1>
    </div>
  )
}

export default Pet;