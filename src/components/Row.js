import React from 'react';
import '../styles/Row.css';

function Row({ title }) {
  return (
    <div className="row">
      <h2 className="text-black ">{title}</h2>
      <div className="row-posters">
        <img
          className="row-poster"
          src="https://m.media-amazon.com/images/M/MV5BNDFjMTI4ZTQtYzNlNS00YmJiLWEyYzYtYWFiYTZjOTI5MDM1XkEyXkFqcGc@._V1_.jpg"
          alt="Movie Poster"
        />
        <img
          className="row-poster"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4JQ8kt5ZWhzlKzcvcuYayYE0CT8unC3-P_A&s"
          alt="Movie Poster"
        />
        <img
          className="row-poster"
          src="https://wallpapercave.com/wp/wp8872777.jpg"
          alt="Movie Poster"
        />
        <img
          className="row-poster"
          src="https://external-preview.redd.it/wVUMg3Mf9UVCAFOiNktL9yCmVZSzlSJdPpUsQSm3j5Q.jpg?width=640&crop=smart&auto=webp&s=3a9f30a7da170344e2870a5cb8489bb371e74e04"
          alt="Movie Poster"
        />
        <img
          className="row-poster"
          src="https://c4.wallpaperflare.com/wallpaper/144/450/423/star-wars-movies-star-wars-the-last-jedi-poster-wallpaper-preview.jpg"
          alt="Movie Poster"
        />
        <img
          className="row-poster"
          src="https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-ron-poster.jpg"
          alt="Movie Poster"
        />
        <img
          className="row-poster"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41LIgH27OQvMieB_tKqeq7WWq8OhBnKrpqg&s"
          alt="Movie Poster"
        />
        <img
          className="row-poster"
          src="https://i.ebayimg.com/images/g/1cAAAOSwwlhio4Mw/s-l1200.jpg"
          alt="Movie Poster"
        />
        <img
          className="row-poster"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBawSjowsxzdMRY0hsHLcrWxnGxtsmLPObyQ&s"
          alt="Movie Poster"
        />
      </div>
    </div>
  );
}

export default Row;