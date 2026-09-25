import { useEffect, useState } from "react";
import FilmCard from "../components/FilmCard";

function Films() {

  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://www.swapi.tech/api/films")
      .then(response => response.json())
      .then(data => {
        console.log(data);

        setFilms(data.result);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener las películas:", error);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h2>Cargando películas...</h2>;
  }

  return (
    <main>
      <h2>Películas de Star Wars</h2>

      <div className="films-container">
        {films.map(fiml => (
            <FilmCard
                key={films.uid}
                film={film}
            />
        ))}
      </div>
    </main>
  );
}

export default Films;
