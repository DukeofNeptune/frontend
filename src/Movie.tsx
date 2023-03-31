import { useState } from 'react';

// Importing Movie Data
import data from './MovieData.json';

// setting movie data
const movieSample = data.MovieData;

//Movie Collection Page

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(movieSample);

  const addMovie = () => {
    setListOfMovies([
      ...movieSample,
      {
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Tim Burton',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };

  return (
    <>
      <div style={{ backgroundColor: 'lightblue' }}>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table" style={{ backgroundColor: 'aliceblue' }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
