"use client";
import { useState, useEffect } from "react";
import FilmList from "./FilmList";

export default function FilmPage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=0"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilms(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <FilmList Films={films} />
    </>
  );
}