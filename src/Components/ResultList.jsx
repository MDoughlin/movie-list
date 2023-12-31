import React from 'react';

const ResultList = (props) => {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <>

      {props.movies.map((movie, index) =>
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster}></img>
          <div onClick={() => { props.handleFavoritesClick(movie); }} className="overlay d-flex align-items-center justify-content-center">
            <FavoriteComponent />
          </div>
        </div>
      )}
    </>
  );
};
export default ResultList;
