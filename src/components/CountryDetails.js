//This is the component that we will render via the react-router-dom's Route, and it should receive the country code (alpha3Code) via the URL.


function CountryDetails (props) {
    const {countryDetails,setCountryDetails} = useState([])
    const {id} = useParams;
    useEffect(() => {
        setCountryDetails();
      }, [id]);
    return (



    <div class="col-7">
            <h1>France</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                     
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    // const [projects, setProjects] = useState([]);
  
    // // This effect depends on `props.projects`.
    // // It will run on initial render and every time
    // // when the `props.projects` gets updated.
    // useEffect(() => {
    //   setProjects(props.projects);
    // }, [props.projects]);
  
  
    // return (
    //   <div>
    //     <h1>Projects</h1>
    //     {projects.map((project) => {
    //       return (
    //         <div key={project._id} className="project">
    //           <h3>{project.name}</h3>
    //           <p>{project.technologies}</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // );
}

  export default CountryDetails;