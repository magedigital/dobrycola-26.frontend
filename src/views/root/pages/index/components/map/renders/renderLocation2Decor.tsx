import React from 'react';

import I from '../types.ts';

const renderLocation2Decor: I['renderLocation2Decor'] = function () {
    return (
        <>
            <img
                src={require('@media/map/map-loc-02-3-1.png')}
                alt=""
                className="indexMap__mapLocation2Info"
            />
            <img
                src={require('@media/map/loc2-light-1.png')}
                alt=""
                className="indexMap__mapLocation2Light"
            />
            <img
                src={require('@media/map/map-loc-02-3.png')}
                alt=""
                className="indexMap__mapLocation2Dynamic"
            />
        </>
    );
};

export default renderLocation2Decor;
