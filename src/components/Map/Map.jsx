import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Map = () => {
    // use the hook to import style classes
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat:48.85855, lng:2.29444 };
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
              bootstrapURLKeys={{key: 'AIzaSyBNNn29X8jHfQJPblru-NNOT45-GPI-hHU'}}
              defaultCenter={coordinates}
              center={coordinates}
              defaultZoom={14}
              margin={[50,50,50,50]}
              options={''}
              onChange={''}
              onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;