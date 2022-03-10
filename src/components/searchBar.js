import Reat, { useState } from "react";

const Search_Api =
  "https://api.themoviedb.org/3/search/movie?api_key=9b4986d97e1401e7bbde7deba01d4159&language=en-US&query=";

function SearchBar(props) {

    const [searchName,setsearchName]=useState('');
    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetch(Search_Api + searchName)
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        props.setMovies(data.results);
      });


      };
      const onchangehandler = (e)=>{
          setsearchName(e.target.value); 
      }

  return (
    <Reat.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <form onSubmit={onSubmitHandler} className="container-fluid d-flex">
            <a class="navbar-brand" href="#">
              Movie Name
            </a>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchName}
              onChange={onchangehandler}


            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </Reat.Fragment>
  );
}

export default SearchBar;
