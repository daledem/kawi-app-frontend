import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { NavLink } from "react-router";
import 'leaflet/dist/leaflet.css'
import '../assets/map.css'

function Map(){

    const position:[number,number] = [42.463510, -2.426623] 

    return(
        <>
            <NavLink to="/" className="navLink">
                <button className="go-back-button"/>
            </NavLink>
            <div className='map-root'>
                <header className='map-header'>
                    <h1>
                        MAPA
                    </h1>
                </header>

                <div className="spacer3 layer3"/>

                <MapContainer style={{ height: "100%", width: "100%" }} center={position} zoom={17}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    El Quintiliano. <br /> Por si te habias perdido.
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    </>
    )
}

export default Map