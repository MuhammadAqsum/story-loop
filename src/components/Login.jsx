import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Payload to be sent to the API
      const loginData = {
        username: username,
        password: password,
      };
  
      try {
        const response = await fetch('https://new.storyloop.com/wp-json/wp/v2/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });
  
        const data = await response.json();
  
        // Check for successful response
        if (response.ok) {
          // Assuming the API sends back a token or success message
          setMessage('Login successful!');
          // You may want to store the token in local storage or cookies for future authentication
          localStorage.setItem('authToken', data.token);
          navigate('/files');  // Redirect to index page ("/" in this case)
        } else {
          // Handle error response
          setMessage(`Error: ${data.message || 'Login failed.'}`);
        }
      } catch (error) {
        console.error('Error during login:', error);
        setMessage('An error occurred. Please try again.');
      }
    };
  
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>User Name:</label>
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  };
export default Login
