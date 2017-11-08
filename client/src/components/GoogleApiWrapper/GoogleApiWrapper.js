import React from 'react'
import ReactDOM from 'react-dom'

import { ScriptCache } from './lib/ScriptCache'
import GoogleApi from './lib/GoogleApi'

const defaultMapConfig = {}
const defaultCreateCache = (options) => {
    options = options || {};
    const apiKey = options.apiKey;
    const libraries = options.libraries || ['places'];
    const version = options.version || '3.29';
    const language = options.language || 'en';

    return ScriptCache({
        google: GoogleApi({
            apiKey: apiKey,
            language: language,
            libraries: libraries,
            version: version
        })
    });
};

export const wrapper = (options) => (WrappedComponent) => {
    const apiKey = options.apiKey;
    const libraries = options.libraries || ['places'];
    const version = options.version || '3';
    const createCache = options.createCache || defaultCreateCache;

    class Wrapper extends React.Component {
        constructor(props, context) {
            super(props, context);

            this.scriptCache = createCache(options);
            this.scriptCache.google.onLoad(this.onLoad.bind(this))

            this.state = {
                loaded: false,
                map: null,
                google: null
            }
        }

        onLoad(err, tag) {
            this._gapi = window.google;

            this.setState({ loaded: true, google: this._gapi })
        }

        render() {
            const props = Object.assign({}, this.props, {
                loaded: this.state.loaded,
                google: window.google
            });

            return (
                <div>
                    <WrappedComponent {...props} />
                    <div ref='map' />
                </div>
            )
        }
    }

    return Wrapper;
}

export default wrapper;


















// import GoogleMapReact, { GoogleApiWrapper } from 'google-maps-react';
// import MapContainer from './Mapcontainer/MapContainer.js';
// export default GoogleApiWrapper({ apiKey: 'AIzaSyCkcPoiLVUqMM83b_oUYhgABQbWjv5-_5E' })(MapContainer)




// import React from 'react'
// import ReactDOM from 'react-dom'

// import { ScriptCache } from './lib/ScriptCache'
// import GoogleApi from './lib/GoogleApi'
// import Map from './Map'

// const defaultMapConfig = {}
// const defaultCreateCache = (options) => {
//     options = options || {};
//     const apiKey = options.apiKey;
//     const libraries = options.libraries || ['places'];
//     const version = options.version || '3.29';
//     const language = options.language || 'en';

//     return ScriptCache({
//         google: GoogleApi({
//             apiKey: apiKey,
//             language: language,
//             libraries: libraries,
//             version: version
//         })
//     });
// };

// export const wrapper = (options) => (WrappedComponent) => {
//     const apiKey = options.apiKey;
//     const libraries = options.libraries || ['places'];
//     const version = options.version || '3';
//     const createCache = options.createCache || defaultCreateCache;

//     class Wrapper extends React.Component {
//         constructor(props, context) {
//             super(props, context);

//             this.scriptCache = createCache(options);
//             this.scriptCache.google.onLoad(this.onLoad.bind(this))

//             this.state = {
//                 loaded: false,
//                 map: null,
//                 google: null
//             }
//         }

//         onLoad(err, tag) {
//             this._gapi = window.google;

//             this.setState({ loaded: true, google: this._gapi })
//         }

//         render() {
//             const props = Object.assign({}, this.props, {
//                 loaded: this.state.loaded,
//                 google: window.google
//             });

//             return (
//                 <div>
//                     <Map {...props} />
//                     <div ref='map' />
//                 </div>
//             )
//         }
//     }

//     return Wrapper;
// }

// export default wrapper;