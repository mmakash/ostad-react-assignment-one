import React from 'react';

const Hero = () => {
    const isLoggedIn = true;
    return (
        <div>
            <h2>Hello From Hero</h2>
            <p>Here is a conditional rendering</p>
            {isLoggedIn ? <p>Welcome to the Dashboard</p> : <p>Please login to access the Dashboard</p>}
        </div>
    );
};

export default Hero;