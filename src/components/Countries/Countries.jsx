import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));

    const handlerVisitedCountry = country =>{
      console.log('add this to your visited country ');
      console.log(country);
    }

  }, []);
  return (
    <div>
      <h3>Countries : {countries.length}</h3>
      <div>
        <h5>Visited Countries </h5>
        <ul></ul>
      </div>

      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.cca3}
          // handlerVisitedCountry={handlerVisitedCountry}
          
           country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
