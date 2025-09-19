import React, { useState } from 'react';
import '../component/country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {

    // console.log(handleVisitedCountries)
     const [Visited, setVisited] =useState(false)


    const handleVisited = () =>{
       setVisited(!Visited)

        console.log('handle clicked')
        handleVisitedCountries(country)

    }
   



    // console.log(country.area.area)
    return (
        <div className={`country ${Visited? 'country-visited':'not-country-visited' } `}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name :{country.name.common}</h1>
            <h3>Population:{country.population.population}&& Capital : {country.capital.capital[0]}</h3>
            <p className='paragraph'>Area:{country.area.area}
                {country.area.area > 3000000?' BigCountry': ' small country'
                    
                }
            </p>
            <button onClick={handleVisited }>
                 {Visited ? "visited": "not visited"}
            </button>
            <button onClick={() => handleVisitedFlag(country.flags.flags.png)} >Add Visited Flag</button>
            
        </div>
    );
};

export default Country;