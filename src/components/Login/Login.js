import React from 'react';

const Login = () => {
    return (
      <div>
        <h2>Please Login</h2>
        <form>
          <input type="email" placeholder="Your email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
};

export default Login;