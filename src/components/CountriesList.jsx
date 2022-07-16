import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';

function CountriesList() {
  const [countries, setCountries] = useState([]);
  const { alpha3Code } = useParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
        setLoaded(!loaded);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h2>Country List</h2>
          <div className="list-group">
            {loaded ? countries && countries.map((pizza) => {
              return (
                <div className="backgroundColorWi">
                 
                  <Link to={`/countriesDetails/${pizza.alpha3Code}`}>
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${pizza.alpha2Code.toLowerCase()}.png`}
                    alt="flag"
                  />
                    <h5>{pizza.name.official}</h5>
                  </Link>
                  
                </div>
              );
            }): <Spinner />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
