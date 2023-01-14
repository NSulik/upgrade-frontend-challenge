import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { AiOutlineLoading } from 'react-icons/ai'

export default function Root() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)

    // For a simple site just pass the info through the navigation state works
    // react context would probably be better, but this was quicker
    navigate("/more-info", {
      state: {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      }
    })
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="First Name" required />
        <input type="email" name="email"  placeholder="E-mail" required />
        <input type="password" name="password"  placeholder="Password" required pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" title="Must contain at least one number and one letter, and at least 8 or more characters"/>
        <div className="button-container">
          <button type="submit" value="Next">{loading ? <AiOutlineLoading className="spinner" /> : 'Next'}</button>
        </div>
      </form>
    </div>
  )
}