import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt=""/>
                    <h2>
                        Escolha um orfanato no mapa
                    </h2>
                    <p>Muitas crianças esperam sua visita :)</p>
                </header>
            
                <footer>
                    <strong>Angra dos Reis</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>
            
            <Map 
                center={[-22.9635145,-44.3028551]}
                zoom={17}
                style={{width:'100%', height:'100%'}}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map>

            <Link to="/add" className="create-orphanage">
                <FiPlus size={26} color="#ffffff"/>            
            </Link>
        </div>
    );
}

export default OrphanagesMap;