import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

  const { signInWithGoogle } = useFirebase();
    return (
      <div>
        <h2>Please Login</h2>
        <div style={{margin: '12px'}}>
          <button onClick={signInWithGoogle}>SignIn with google</button>
        </div>
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