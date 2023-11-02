
function SearchBar({ handlerSearch }, { search }) {
    //componente searchBar, retorna una barra de busqueda
    return (
        <div className="input-group rounded">
            <input type="search" className="form-control rounded" placeholder="Search" value={search} onChange={(e) => handlerSearch(e.target.value)} />
        </div>
    );
}

export default SearchBar;