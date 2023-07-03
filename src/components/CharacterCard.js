function CharacterCard ({eachCharacter}) {
    return(
        <>
         <img src={eachCharacter.image} alt={eachCharacter.name} />
           <h1>{eachCharacter.name}</h1> 
           <p> {eachCharacter.species}</p> 
          
        
      </>

    );
}
export default CharacterCard;