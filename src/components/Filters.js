function Filters({ searchByName, searchBySpecie, handleFilters }) {
  const handleChangeName = (event) => {
    handleFilters('name', event.target.value);
  };
  const handleChangeSpecie = (event) => {
    handleFilters('species', event.target.value);
  };
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchByName}
        onChange={handleChangeName}
      />

      <input
        type="text"
        placeholder="Buscar por especie..."
        value={searchBySpecie}
        onChange={handleChangeSpecie}
      />
    </form>
  );
}
export default Filters;
