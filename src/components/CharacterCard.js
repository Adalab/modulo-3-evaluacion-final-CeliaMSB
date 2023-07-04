import { Link } from "react-router-dom";

function CharacterCard ({eachCharacter}) {
    return(
        <div className="character-card">
        <Link to={"/contact/"+ eachCharacter.id}>
         <img src={eachCharacter.image} alt={eachCharacter.name} />
           <h1>{eachCharacter.name}</h1> 
           <p> {eachCharacter.species}</p> 
          
           </Link>
      </div>

    );
}
export default CharacterCard;