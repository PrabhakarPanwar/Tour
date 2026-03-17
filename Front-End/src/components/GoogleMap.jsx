import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 30.41,
            lng: 78.34
        },
        zoom: 11
    };

    return (
        <div className='py-10' style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={30.4196459}
                    lng={78.3164241}
                    text="Kanatal Orchids"
                />
            </GoogleMapReact>
        </div>
    );
}