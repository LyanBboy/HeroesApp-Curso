import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

//import batman from '../../assets/dc-robin.jpg';
const heroImgPath = require.context('../../assets',true); // required usada por webpack

export const HeroesScreen = () => {

  const { heroid } = useParams();
  const navigate = useNavigate();
  
  const heroe = useMemo( ()=> getHeroById(heroid) ,[heroid]);// memorizando valores 
  
  if(!heroe){
    return <Navigate to='/'/>
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = heroe;

  const imgPath = `/assets/${id}.jpg`;

  const handleBack =()=>{
    navigate(-1);// regresa al historial anterior 
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          // src={imgPath} 
          //src={batman}  para uso de recurso staticos
          src={ heroImgPath(`./${id}.jpg`)} // para uso de recursos dinamicos
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'          
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInUp">
        <h3>{ superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b>{ alter_ego }</li>
          <li className="list-group-item"><b>Publisher:</b>{ publisher }</li>
          <li className="list-group-item"><b>First Aparrence:</b>{ first_appearance }</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button 
          className="btn btn-outline-info"
          onClick={ handleBack }
          >
          Regresar
        </button>
      </div>
    </div>
  )
}
