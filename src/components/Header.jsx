import React from 'react';
import "./Header.css";

const Header = () => {
    const items = ["Home","About","Project","Service","Contact"];
    return (
        <div>
            <h2>Hello From Header</h2>
            <p>Here is a list of items</p>
            <ul className='nav-list'>
                {/* using loop */}
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