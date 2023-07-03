import CharacterCard from "./CharacterCard";

function CharacterList({ characterList }) {
  const html = characterList.map((eachCharacter) => (
    <li key={eachCharacter.id} className="list">
      <CharacterCard eachCharacter={eachCharacter} />
    </li>
  ));

  return <ul>{html}</ul>;
}

export default CharacterList;
