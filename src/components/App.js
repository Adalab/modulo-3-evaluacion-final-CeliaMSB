import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';

const App = () => {
  const [characterList, setCharacterList] = useState([]);
  const [searchByName, setSearchByName]= useState('');
  const [searchBySpecie, setSearchBySpecie]= useState('');


  useEffect(() => {
 getDataFromApi()
      .then(cleanData => {
        setCharacterList(cleanData);
      });
  }, []);

  const handleChangeName = (event) => {
  setSearchByName(event.target.value);
  }
  const handleChangeSpecie = (event) => {
    setSearchBySpecie(event.target.value);
  }
  const filteredCharacters = characterList
  .filter((eachContact) => eachContact.name.toLowerCase().includes(searchByName.toLowerCase()) )
  .filter((eachContact) => eachContact.species.toLowerCase().includes(searchBySpecie.toLowerCase()) );

  return (
    <div>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <section>
          <form>
            <input type="text"
             placeholder="Buscar por nombre..." 
             value={searchByName} 
             onChange={handleChangeName}/>

            <input type="text" 
            placeholder="Buscar por especie..." 
            value={searchBySpecie}
            onChange={handleChangeSpecie}
            />
          </form>
        </section>
        <section>
          <CharacterList
          characterList={filteredCharacters}
          />
           
         
         
        </section>
      </main>
    </div>
  );
};

export default App;