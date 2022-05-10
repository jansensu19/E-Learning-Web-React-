import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className="contact-form" id="contact">
      <div className="c-right">
        <form>
          <span className='Sign'>Sign Up</span>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <input type="password" name="user_password" className='user' placeholder='Password'/>
          <input type="submit" value="Send" className="button_submit"/>
        </form>
      </div>
    </div>
  )
}

export default Form