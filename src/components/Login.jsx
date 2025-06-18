import { useState } from 'react';

export default function Login() {
  const [enteredEmail, SetEnteredEmail] = useState('');
  const [enteredPassword, SetEnteredPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted');
    console.log('Email - ' + enteredEmail)
    console.log('Password - ' + enteredPassword)
  }

  function handleEmailChange(event) {
    SetEnteredEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    SetEnteredPassword(event.target.value);
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" 
          onChange={handleEmailChange} value={enteredEmail}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" 
          onChange={handlePasswordChange} value={enteredPassword}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
