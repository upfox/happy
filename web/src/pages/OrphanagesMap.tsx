import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';


const OrphanagesMap = () => {

    const [styleMap, setStyleMap] = useState('streets-v11');

    const handleInputChange = (e: any) => {
    
        setStyleMap(e.target.id);
        return e.target.id;

    }


    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt=""/>
                    <h2>
                        Escolha um orfanato no mapa
                    </h2>
                    <p>Muitas crianças esperam sua visita :)</p>
                    <br></br>
                    <div id="menu">
                        <input
                            id="streets-v11"
                            type="radio"
                            name="rtoggle"
                            value="streets"
                            onChange={e => handleInputChange(e)}
                            defaultChecked
                        />
                        <label htmlFor="streets-v11"> Streets</label>
                        <br></br>
                        <input id="light-v10" type="radio" name="rtoggle" value="light" onChange={e => handleInputChange(e)}/>
                        <label htmlFor="light-v10"> Light</label>
                        <br></br>
                        <input id="dark-v10" type="radio" name="rtoggle" value="dark" onChange={e => handleInputChange(e)}/>
                        <label htmlFor="dark-v10"> Dark</label>
                        <br></br>
                        <input id="outdoors-v11" type="radio" name="rtoggle" value="outdoors" onChange={e => handleInputChange(e)}  />
                        <label htmlFor="outdoors-v11"> Outdoors</label>
                        <br></br>
                        <input id="satellite-v9" type="radio" name="rtoggle" value="satellite" onChange={e => handleInputChange(e)}/>
                        <label htmlFor="satellite-v9"> Satellite</label>
                        <br></br>
                        <input id="navigation-preview-day-v4" type="radio" name="rtoggle" value="navigation" onChange={e => handleInputChange(e)}/>
                        <label htmlFor="Navigation-preview-day-v4"> Navigation Day</label>
                        <br></br>
                        <input id="navigation-preview-night-v4" type="radio" name="rtoggle" value="navigation" onChange={e => handleInputChange(e)}/>
                        <label htmlFor="Navigation-preview-night-v4"> Navigation Night</label>
                        <br></br>
                        <input id="navigation-guidance-day-v4" type="radio" name="rtoggle" value="navigation" onChange={e => handleInputChange(e)}/>
                        <label htmlFor="Nnavigation-guidance-day-v4"> Nav Guidance Day</label>
                        <br></br>
                        <input id="navigation-guidance-night-v4" type="radio" name="rtoggle" value="navigation" onChange={e => handleInputChange(e)}/>
                        <label htmlFor="Nnavigation-guidance-night-v4"> Nav Guidance Night</label>
                    </div>
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
                
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${styleMap}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map>

            <Link to="/add" className="create-orphanage">
                <FiPlus size={26} color="#ffffff"/>            
            </Link>
        </div>
    );

}

export default OrphanagesMap;