import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase_init';

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathName || '/';

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
    })
  }

    return (
      <div>
        <h2>Please Login</h2>
        <div style={{ margin: "12px" }}>
          <button onClick={handleGoogleSignIn}>SignIn with google</button>
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