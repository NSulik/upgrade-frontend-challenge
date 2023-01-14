import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { IoMdCloseCircle } from "react-icons/io"


export default function Root() {
  const navigate = useNavigate()
  const location = useLocation()

  function handleBack() {
    navigate('/')
  }

  return (
    <div className="container">
      <h1>Error</h1>
      <IoMdCloseCircle size='40' />
      <h1>Uh oh, something went wrong. Please try again later.</h1>
      <div>
        <p>{ location.state?.errorMessage }</p>
      </div>
      <div>
        <button onClick={handleBack}>Restart</button> 
      </div>
    </div>
  )
}