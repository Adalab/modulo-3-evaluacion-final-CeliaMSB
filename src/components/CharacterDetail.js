import { Link } from 'react-router-dom';

function CharacterDetail({ characterData }) {
 console.log(characterData)
  if (characterData) {
    return (
      <div className=''>
        <section>
          <img
            src={characterData.image}
            alt={`Foto de ${characterData.name}`}
          />
          <h2>Nombre:{characterData.name}</h2>
          <p>Especie:{characterData.species}</p>
          <p>Planeta de origen:{characterData.origin}</p>
          <p>Estado:{characterData.status}</p>
          <p>Episodios:{characterData.numberOfEpisodes}</p>
          <Link to={'/'}>Volver</Link>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <p className="text--error">Lo sentimos, ese contacto no existe!</p>
        <Link to={'/'}>Volver</Link>
      </div>
    );
  }
}
export default CharacterDetail;
