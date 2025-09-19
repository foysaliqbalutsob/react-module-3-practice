import React, { use, useState } from 'react';
import Country from './Contry';
import "../component/countries.css"

const Countries = ({countriesPromise}) => {
    const [VisitedCountry, setVisitedCountry] =useState([]);
    const [VisitedFlag, setVisitedFlag] = useState([]);

   






    const handleVisitedCountries = (country) =>{

        console.log('clicked', country.name.common);
        const newVisitedCountry = [...VisitedCountry,country];
        console.log(newVisitedCountry);
        setVisitedCountry (newVisitedCountry)
    }
    const handleVisitedFlag = (flag) =>{
        const newVisitedFlag = [...VisitedFlag,flag];
        setVisitedFlag(newVisitedFlag)
        console.log('flag',flag)

    }


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    // console.log(countries);

   
    return (
        <div >
            <h1>In the country: {countries.length}</h1>
            <h3>Total Country visited:{VisitedCountry.length} </h3>
            <h3>Total Flags : {VisitedFlag.length} </h3>
            <ol>
                {
                    VisitedCountry.map(country =><li key={country.ccn3.ccn3} >{country.name.common}</li> )
                }
            </ol>
            <div className='visited-container'>
                {
                    VisitedFlag.map((flag,index) => <img key={index} src={flag} alt="" /> )
                }
            </div>
            
            <div className='countries'>
                {
                countries.map(country => <Country key={country.ccn3.ccn3} country= {country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag ={handleVisitedFlag} ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;