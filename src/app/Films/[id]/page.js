"use client";
import { useState, useEffect } from "react";

export default function FilmDetail({ params }) {
  const { id } = params;
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=0"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilm(data.find((film) => film["_id"] === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <img src={film.poster} alt={film.title} />
      <h5>{film.title}</h5>
      <h5>{film.fullplot}</h5>
    </>
  );
}