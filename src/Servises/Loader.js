import React from 'react';
import loader1 from '../gifts/Fidget-spinner.gif'
import loader2 from '../gifts/Hourglass.gif'
const Loader = () => {
    return (
        <div>
            <img src={loader1} alt="loader"/>
            <h1 style={{color:"gray"}}>LOADING....</h1>
            <img src={loader2} alt="loader"/>
           
        </div>
    );
};

export default Loader;