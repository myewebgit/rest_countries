import React from 'react';
import './Country.css'
const Country = (props) => {

const {area, region,name,population,flags} = props.country;
    return (
        
        <div className='country '>
            <h3 className=''> Country:<span className='title'>{name.common}</span></h3>
            <img src={flags.png} alt=''></img>
            
            <p> Population:{population}</p>
            <p> Region:{region}</p>
            <p className='bg-info'> Area:{area} sq. Km.</p>
        </div>
        // <div className='country'>
            
        //     <h3> Country:<span className='title'>{props.country.name.common}</span></h3>
        //     <p> Population:{props.country.population}</p>
        //     <p> Area:{props.country.area} sq. Km.</p>
        // </div>
    );
};

export default Country;