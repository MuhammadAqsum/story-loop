import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const SignUp = () => {
      // State for handling form data
  const [username, setUsername] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Payload to be sent to the API
    const userData = {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      organization: organization,
    };

    try {
      const response = await fetch('https://new.storyloop.com/wp-json/wp/v2/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      // Check for successful response
      if (response.ok) {
        setMessage('Signup successful! Please check your email for confirmation.');
      } else {
        // Handle error response
        setMessage(`Error: ${data.message || 'Signup failed.'}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('An error occurred. Please try again.');
    }
  };
  return (
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>User name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>First name:</label>
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last name:</label>
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Organization:</label>
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <Link to="/login" className="header-button sign-up">Sign In</Link>
      {message && <p>{message}</p>}
    </div>
  );
};
export default SignUp
