import { NavLink } from "react-router";
import "../assets/index.css"

function Index(){
    return(
        <div id="index-root">
            <header className="index-header">
                <h1>
                    KAWI-APP
                </h1>
            </header>

            <div className="spacer1 layer1"/>

            <main className="index-menu">
                <button className="index-button">
                    <NavLink to="/news" className="navLink">
                        Noticias
                    </NavLink>
                </button>

                <button className="index-button">
                    <NavLink to="/map" className="navLink">
                        Mapa
                    </NavLink>
                </button>
            </main>
        </div>
    )
}

export default Index