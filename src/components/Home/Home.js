import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase_init';

const auth = getAuth(app);
const Home = () => {

    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>This is home page.</h2>
            <h3>Current user: { user ? user.displayName : 'No user exists.'}</h3>
        </div>
    );
};

export default Home;