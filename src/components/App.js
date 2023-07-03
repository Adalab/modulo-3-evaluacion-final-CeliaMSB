import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';

const App = () => {
  const [characterList, setCharacterList] = useState([]);
  const [searchByName, setSearchByName] = useState('');
  const [searchBySpecie, setSearchBySpecie] = useState('');

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, []);

  const handleFilters = (varName, varValue) => {
    if (varName === 'name') {
      setSearchByName(varValue);
    } else if (varName === 'species') {
      setSearchBySpecie(varValue);
    }
  };

  const filteredCharacters = characterList
    .filter((eachContact) =>
      eachContact.name.toLowerCase().includes(searchByName.toLowerCase())
    )
    .filter((eachContact) =>
      eachContact.species.toLowerCase().includes(searchBySpecie.toLowerCase())
    );

  return (
    <div>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <section>
          <Filters
            searchByName={searchByName}
            searchBySpecie={searchBySpecie}
            handleFilters={handleFilters}
          />
        </section>
        <section>
          <CharacterList characterList={filteredCharacters} />
        </section>
      </main>
    </div>
  );
};

export default App;
