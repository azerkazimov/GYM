import React from 'react'

function Heading(props) {
  return (
    <div className="container">
        <div className="row flex-container flex-justify-center flex-align-center my-5">
            <div className="section-heading">
                <h2>{props.heading}</h2>
            </div>
        </div>
    </div>
  )
}

export default Heading