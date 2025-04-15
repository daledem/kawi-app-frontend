import { NavLink } from "react-router";
import "../assets/index.css"

function Index(){
    return(
        <>
        <header>
            <h1>
                KAWI-APP
            </h1>
        </header>

        <div className="spacer layer1"/>

        <main className="menu">
            <button>
                <NavLink to="/news" className="navLink">
                    Noticias
                </NavLink>
            </button>

            <button>
                <NavLink to="/map" className="navLink">
                    Mapa
                </NavLink>
            </button>
        </main>
        </>
    )
}

export default Index