import React from "react"

import { useLoaderData, useLocation, useNavigate } from "react-router-dom"

export async function colorLoader(){
  //NTH: caching + handle error + colors fallback?
  return fetch('http://localhost:3001/api/colors')
}

export default function MoreInfo() {
  const navigate = useNavigate()
  const location = useLocation()
  const colors = useLoaderData()

  function handleSubmit(event) {
    event.preventDefault()
    const previousForm = location.state

    // Passing the info through the navigation state works
    // react context would probably be better, but this was quicker
    navigate("/confirmation", {
      state:{
        name: previousForm?.name,
        email: previousForm?.email,
        password: previousForm?.password,
        color: event.target?.color.value,
        terms: event.target?.terms.checked,
      }
    })
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <div className="container">
      <h1>Additional Info</h1>
      <form onSubmit={handleSubmit}>
        <select defaultValue='' name='color' required>
          <option value="">Select your favorite color</option>
          {colors.map((color, i) => <option key={i} value={color}>{color}</option> )}
        </select>
        <label className="checkbox-label">
          <input type="checkbox" name='terms' value={true} required/>
          I Agree to the Terms and Conditions
        </label>
        <div className="button-container">
          <button onClick={handleBack}>Back</button>
          <button type="submit" value="Next">Next</button>
        </div>
      </form>
    </div>
  )

}