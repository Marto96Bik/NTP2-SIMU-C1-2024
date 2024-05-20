import Film from "./Film";

export default function FilmsList(props) {
  return (
    <ul>
      {props.Films.map((film) => {
        return (
          <Film
            Id={film["_id"]}
            Poster={film.poster}
            Title={film.title}
            Fullplot={film.fullplot}
          />
        );
      })}
    </ul>
  );
}