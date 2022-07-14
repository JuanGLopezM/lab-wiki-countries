// src/App.js

import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import { Route, Routes} from "react-router-dom";
import countriesData from "./countries.json";
import CountryDetails from "./components/CountryDetails";


function App() {
  return (
  <div className="App">
    <Navbar />
    <CountriesList />
    {/*  */}
  <Routes>
    <Route path="/CountryDetails" element={ <CountriesList countries={countriesData} /> } />
  </Routes>


  </div>
  )
}

export default App


