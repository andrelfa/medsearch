import {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
    state = {
        viewport: {
            width: '50vw',
            height: '50vh',
            latitude: 41.5868,
            longitude: -93.625,
            zoom: 13
        }
    };

    render() {
        return (
            <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxApiAccessToken="pk.eyJ1IjoiYW5kcmVsZmEiLCJhIjoiY2p1dTZ6cGRmMDBiNDRkcGYxOGYzc2lycyJ9.Ab_rwMHWTQSaYHn3snPfSw"
                onViewportChange={(viewport) => this.setState({viewport})}
                {...this.state.viewport}
            />
        );
    }
}

export default Map;