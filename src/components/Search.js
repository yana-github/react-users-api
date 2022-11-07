
const Search = (props) => {
    const {onChange} = props;

    return(
        <div >
        <input 
        className="search-field"
        type="text"
        placeholder="Поиск по имени"
        name="search"
        onChange={onChange}
        />
        </div>
    )
}

export default Search;