import React from 'react'

const FullName = () => {
    var lastName='Ben Amor'
    var firstName='Ghassen'
    return (
        <div>
            
        <label> First Name :</label>
        <p>{firstName}</p>
        <label>Last Name: </label>
        <p> {lastName} </p>
            
        </div>
    )
}

export default FullName
