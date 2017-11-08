import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import GoogleApiWrapper from '../../components/MapContainer/MapContainer.js';

class Map extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }

    componentDidMount() {
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 14;
            let lat = 37.774929;
            let lng = -122.419416;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
        }
    }

    render() {
        return (
            <div> 
                <div ref='map' style={{height: 40 + "px", width: 40 + "px"}} >
                    Loading map...
                </div>
            </div>
        );
    }
}

export default Map;
