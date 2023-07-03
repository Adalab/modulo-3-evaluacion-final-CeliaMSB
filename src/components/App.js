import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';

const App = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
 getDataFromApi()
      .then(cleanData => {
        setCharacterList(cleanData);
      });
  }, []);
  return (
    <div>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <section>
          <form>
            <input type="text" placeholder="Buscar por nombre..." />
          </form>
        </section>
        <section>
          <CharacterList
          characterList={characterList}
          />
           
         
         
        </section>
      </main>
    </div>
  );
};

export default App;