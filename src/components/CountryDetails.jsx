import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';

function CountryDetails(props) {
  const { country, setCountry } = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((err) => console.log(err));
  }, [country]);

  return (
    <div class="col-7">
      {country ? (
        <>
          <p>hola</p>
          <img
            src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
          />
          <h1>{country.name.common}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area: </td>
                <td>
                  {country.area}km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders: </td>
                <td>
                  <ul>
                    {country.borders.map((pizza, index) => {
                      return (
                        <Link to={`/countriesDetails/${pizza}`}>
                          <li>{pizza}</li>
                        </Link>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default CountryDetails;
