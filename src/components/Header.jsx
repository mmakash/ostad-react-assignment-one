import React from 'react';

const Header = () => {
    const items = ["Home","About","Project","Service","Contact"];
    return (
        <div>
            <h1>Hello From Header</h1>
            <ul>
                {
                    items.map((item) => {
                        return (
                            <li key={item}>{item}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default Header;