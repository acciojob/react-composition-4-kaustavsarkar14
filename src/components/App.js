
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  function submitForm(e){
    e.preventDefault()
    console.log({name, email, password})
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form action="" onSubmit={e=>submitForm(e)}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={e=>setName(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button type="submit" >Submit</button>
        </form>
    </div>
  )
}

export default App
