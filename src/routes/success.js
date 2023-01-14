import React from "react"
import { useNavigate } from "react-router-dom"

import { IoMdCheckmarkCircle } from 'react-icons/io'


export default function Root() {
  const navigate = useNavigate()

  function handleBack() {
    navigate('/')
  }

  return (
    <div className="container">
      <h1>Success!</h1>
      <IoMdCheckmarkCircle size='40'/>
      <h1>You should receive a confrimation email soon.</h1>
      <div>
        <button onClick={handleBack}>Restart</button>
      </div>
    </div>
  )
}