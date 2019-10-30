import React from 'react';

import {Link } from 'react-router';

const styles= {
    display : 'inline-block',
    margin:'10px 20px'
}




const view = () => {
    return (
        <div>
            <li style={styles}><Link to="/home">Home</Link></li>
            <li style={styles}><Link to="/about">About</Link></li>

        </div>
    );
};

export  {view} ; 