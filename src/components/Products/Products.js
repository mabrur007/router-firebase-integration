import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();

    return (
        <div>
            <h2>Who is the manufacturer?</h2>
            <h3>{ user ? user.displayName : 'I dont Know'}</h3>
        </div>
    );
};

export default Products;