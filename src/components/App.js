import React, { useEffect, useState } from 'react';
import {useLocation, matchPath} from 'react-router';
import '../styles/App.scss'
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { Routes,Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';



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


    const { pathname } = useLocation();

    const routeData = matchPath('/character/:characterId', pathname);
    console.log(routeData);
  
    const characterId = routeData?.params.characterId;
    console.log(characterId);
  
    const characterData = characterList.find((character) => character.id === parseInt(characterId));
    console.log(characterData)
  
  
  
  return (
    <div className='box'>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        
        <Routes>
       <Route path='/' element={
        <>
         <Filters
         searchByName={searchByName}
         searchBySpecie={searchBySpecie}
         handleFilters={handleFilters}
       />
     <section>
       <CharacterList characterList={filteredCharacters} />
     </section>
     </>
       }/>
       
       <Route path='/contact/:characterId' element={<CharacterDetail characterData={characterData}/>}/>

        </Routes>

         
      </main>
    </div>
  );
};

export default App;
