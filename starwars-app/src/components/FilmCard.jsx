function FilmCard({ film }) {

  return (
    <div className="film-card">

      <h3>
        {film.properties.title}
      </h3>

      <p>
        Episodio {film.properties.episode_id}
      </p>

      <p>
        Director: {film.properties.director}
      </p>

      <p>
        Estreno: {film.properties.release_date}
      </p>

      <button>
        Ver detalle
      </button>

    </div>
  );
}

export default FilmCard;

