import {Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <h1>STAR WARS</h1>

            <div>
                <Link to="/">Inicio</Link>
                <Link to="/films">Peliculas</Link>
                <Link to="/people">Personajes</Link>
                <Link to="/planets">Planetas</Link>
                <Link to="/starships">Naves</Link>
            </div>
        </nav>
    );
}

export default Navbar;