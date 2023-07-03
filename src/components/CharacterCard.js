import { Link } from "react-router-dom";

function CharacterCard ({eachCharacter}) {
    return(
        <>
        <Link to={"/contact/"+ eachCharacter.id}>
         <img src={eachCharacter.image} alt={eachCharacter.name} />
           <h1>{eachCharacter.name}</h1> 
           <p> {eachCharacter.species}</p> 
          
           </Link>
      </>

    );
}
export default CharacterCard;