import React from 'react'
import "./Form.css"

function Form() {
  return (
    <>
    <div className="form__container">
        <h1 className="form__title">
            Cuda Account Register
        </h1>
    </div>
    <form className='form__list'>
        <label>Full Name
        <input type="text" />
        </label>
        <label>Email
        <input type="email" name='email address'/>
        </label>
        <label>Password
        <input type="password" name='enter new password'/>
        </label>
      <input type="submit" />
        </form>
    </>
  )
}

export default Form