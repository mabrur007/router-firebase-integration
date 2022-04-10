import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase_init';

const auth = getAuth(app);
const Products = () => {

    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Who is the manufacturer?</h2>
            <h3>{ user ? user.displayName : 'I dont Know'}</h3>
        </div>
    );
};

export default Products;