import { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import CityPin from './city-pin';
import CityInfo from './city-info';

import UNIDADES from '../utils/unidades.json';

class Map extends Component {
    state = {
        viewport: {
            width: '100%',
            height: '40vh',
            latitude: this.props.unidades ? this.props.unidades[0].latitude : this.props.unidade.latitude,
            longitude: this.props.unidades ? this.props.unidades[0].longitude : this.props.unidade.longitude,
            zoom: this.props.unidades ? 13.5 : 16,
            showMap: false
        },
        popupInfo: null
    };

    constructor(props) {
        super(props);
    }

    _updateViewport = (viewport) => {
        this.setState({ viewport });
    }

    _renderCityMarker = (unidade) => {
        return (
            <Marker
                key={unidade._id}
                longitude={unidade.longitude}
                latitude={unidade.latitude} >
                <CityPin size={20} onClick={() => this.setState({ popupInfo: unidade })} />
                {/* <CityPin size={20} /> */}
            </Marker>
        );
    }

    _renderPopup(unidades) {
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

                {/* {UNIDADES.map(this._renderCityMarker)} */}
                {this.props.unidades ? this.props.unidades.map((unidade) => this._renderCityMarker(unidade)) 
                : this._renderCityMarker(this.props.unidade) }

                {this._renderPopup()}

                {/* <div className="fullscreen" style={fullscreenControlStyle}>
                <FullscreenControl />
                </div>
                <div className="nav" style={navStyle}>
                <NavigationControl onViewportChange={this._updateViewport} />
                </div> */}

                {/* <ControlPanel containerComponent={this.props.unidade.containerComponent} /> */}
            </ReactMapGL>
        );
    }
}

export default Map;