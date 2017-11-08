import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
// import __GAPI_KEY__ from '../../googlekeys.js';
import Map from '../Map/Map.js';


export class MapContainer extends Component {
    render() {
        if (!this.props.loaded) {
            // return <div>Loading...</div>
        }
        // const style = {
        //     width: '100px',
        //     height: '100px'
        //}
        return (
            <div style={{height: 40 + 'px', width: 40 + 'px'}}>
                <Map google={this.props.google}/>
            </div>
        );
    }
}
export default GoogleApiWrapper({ apiKey: 'AIzaSyCkcPoiLVUqMM83b_oUYhgABQbWjv5-_5E' })(MapContainer)
//export default GoogleApiWrapper({ apiKey: 'AIzaSyCkcPoiLVUqMM83b_oUYhgABQbWjv5-_5E' })(MapContainer);

//AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
    // < Map google= { window.google } />