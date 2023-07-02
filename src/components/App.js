import React, { useEffect, useState } from 'react';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
      })
  
  }, []);

  function handleSearch (event) {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Character = ({ photo, name, species }) => {
    return (
      <div>
        <img src={photo} alt={name} />
        <h2>{name}</h2>
        <p>{species}</p>
      </div>
    );
  };

  return (
    <div>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <section>
          <form>
            <input
              type="text"
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </form>
        </section>
        <section>
          <ul>
            {filteredCharacters.map((character) => (
              <li key={character.id}>
                <Character
                  photo={character.image}
                  name={character.name}
                  species={character.species}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;