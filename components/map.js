import { Component } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl, FullscreenControl } from 'react-map-gl';
import CityPin from './city-pin';
import CityInfo from './city-info';

import UNIDADES from '../utils/unidades.json';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: '100vw',
                height: '70vh',
                latitude: -22.907364,
                longitude: -43.1775717,
                zoom: 13
            },
            popupInfo: null
        };
    }

    _updateViewport = (viewport) => {
        this.setState({ viewport });
    }

    _renderCityMarker = (city, index) => {
        return (
            <Marker
                key={`marker-${index}`}
                longitude={city.longitude}
                latitude={city.latitude} >
                <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
            </Marker>
        );
    }

    _renderPopup() {
        const { popupInfo } = this.state;

        return popupInfo && (
            <Popup tipSize={5}
                anchor="top"
                longitude={popupInfo.longitude}
                latitude={popupInfo.latitude}
                closeOnClick={false}
                onClose={() => this.setState({ popupInfo: null })} >
                <CityInfo info={popupInfo} />
            </Popup>
        );
    }

    render() {
        return (
            <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxApiAccessToken="pk.eyJ1IjoiYW5kcmVsZmEiLCJhIjoiY2p1dTZ6cGRmMDBiNDRkcGYxOGYzc2lycyJ9.Ab_rwMHWTQSaYHn3snPfSw"
                onViewportChange={this._updateViewport}
                {...this.state.viewport}
            >
                {/* <Marker latitude={-22.907364} longitude={-43.1775717} offsetLeft={-20} offsetTop={-10}>
                    <CityPin size={20} onClick={() => this.setState({popupInfo: city})}/>
                </Marker> */}

                {UNIDADES.map(this._renderCityMarker)}

                {this._renderPopup()}

                {/* <div className="fullscreen" style={fullscreenControlStyle}>
                <FullscreenControl />
                </div>
                <div className="nav" style={navStyle}>
                <NavigationControl onViewportChange={this._updateViewport} />
                </div> */}

                {/* <ControlPanel containerComponent={this.props.containerComponent} /> */}
            </ReactMapGL>
        );
    }
}

export default Map;