import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {

    const {user} = useFirebase();
    return (
        <div>
            <h2>This is home page.</h2>
            <h3>Current user: { user ? user.displayName : 'No user exists.'}</h3>
        </div>
    );
};

export default Home;