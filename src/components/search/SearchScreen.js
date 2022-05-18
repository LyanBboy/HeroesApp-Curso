import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroeCard } from "../heroe/HeroeCard";
import { useMemo } from "react";

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  //console.log(queryString.parse(location.search));

  const [ { search }, handleInputChange ] = useForm( {
    search:q
  } );

  const heroFilters = useMemo( ()=> getHeroByName(q) ,[q]);

  const handleSearch =(e)=>{
    e.preventDefault();
    navigate(`?q=${search}`);
  }

  return (
    <div>
      <h1>Busqueda</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <form
          onSubmit={ handleSearch }
          >
            <input
            type='text'
            placeholder="Buscar heroe"
            className="form-control"
            name="search"
            autoComplete="off"
            value={search}
            onChange={ handleInputChange }
            />
            <button
            className="btn btn-outline-primary mt-3"
            type="submit"
            >
              Buscar...
            </button>
          </form>

        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr/>
          {
            (q === '')
              ? <div className="alert alert-info"> Digita un heroe a buscar.</div>
              : (heroFilters.length === 0)
                && <div className="alert alert-danger">No hay resultados: {q}</div>
          }

          {
            heroFilters.map( hero => (
              <HeroeCard 
                key={hero.id}  
                {...hero} 
              />
            ))
          }

        </div>
      </div>

    </div>
  )
}
