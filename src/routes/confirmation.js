import React, { useState } from "react"

import { useLocation, useNavigate } from "react-router-dom"

import { AiOutlineLoading } from 'react-icons/ai'

export default function Root() {
  const [backLoading, setBackLoading] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const { name, email, password, color, terms } = location.state || {}

  function handleBack() {
    // /more-info has fetches colors on load
    setBackLoading(true)
    navigate(-1)
  }

  function handleSubmit() {
    setLoading(true)

    fetch('http://localhost:3001/api/submit', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(location.state)
    }).then(response => {
      if (response.ok) {
        navigate('/success')
      }
      return Promise.reject(response)
    }).catch(response => {
      response.json().then(data => {
        const errorMessage = data.error
        // Since the server does supply a  useful error send it to the error screen
        navigate('/error', {
          state: { errorMessage },
        })
      })

    })
  }

  return (
    <div className="container">
      <h1>Confirmation</h1>
      <p>First Name: {name}</p>  
      <p>E-mail: {email}</p>
      <p>Password: {password?.replace(/./g, '*')}</p>
      <p>Favorite Color: {color}</p>
      <p>Terms & Conditions: {terms ? 'Agreed' : 'Rejected'}</p>
      <div>
        <button onClick={handleBack}>{backLoading ? <AiOutlineLoading className="spinner" /> : 'Back'}</button>
        <button onClick={handleSubmit}>{loading ? <AiOutlineLoading className="spinner" /> : 'Submit'}</button>
        
      </div>
    </div>
  )

}