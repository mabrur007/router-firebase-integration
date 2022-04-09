import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase_init';

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
      <div>
        <h2>Please Login</h2>
        <div style={{ margin: "12px" }}>
          <button onClick={ () => signInWithGoogle() }>SignIn with google</button>
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