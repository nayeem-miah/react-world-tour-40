import { useState } from "react";
import "./country.css";
const Country = ({ country , handlerVisitedCountry}) => {
  console.log(country);
  const { name, flags, area, region, capital, population, cca3 } = country;
  const [Visited, setVisited] = useState(false);

  const handlerVisited = () => {
    setVisited(!Visited);
  };

  return (
    <div className={`country ${Visited && "visited"}`}>
      <h3 style={{ color: Visited ? "green" : "white" }}>
        Name: {name.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Area : {area}</p>
      <p>capital : {capital}</p>
      <p>region : {region}</p>
      <p>population: {population}</p>
      <p>
        <small>Code : {cca3}</small>
      </p>

      {/* <p>languages : {languages.ell}</p> */}

      <button onClick={handlerVisitedCountry()}>Mark as Visited</button>
      <br />

      <button onClick={handlerVisited}>
       
        {Visited ? "visited " : "Going"}
        
      </button>
      {Visited ? "  I have visit this country" : " I want visit"}
    </div>
  );
};

export default Country;
