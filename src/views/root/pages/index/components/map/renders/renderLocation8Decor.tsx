import React from 'react';

import I from '../types.ts';

const renderLocation8Decor: I['renderLocation8Decor'] = function () {
    return (
        <>
            <div className="indexMap__mapLocation8Car">
                <img
                    src={require('@media/map/map-loc-08-2.png')}
                    alt=""
                    className="indexMap__mapLocation8CarThumb"
                />
                <img
                    src={require('@media/map/loc8-light-1.svg').default}
                    alt=""
                    className="indexMap__mapLocation8Light _1"
                />
                <img
                    src={require('@media/map/map-loc-08-3.png')}
                    alt=""
                    className="indexMap__mapLocation8Dynamic _1"
                />
                <img
                    src={require('@media/map/map-loc-08-3.png')}
                    alt=""
                    className="indexMap__mapLocation8Dynamic _2"
                />
                <img
                    src={require('@media/map/loc8-light-2.svg').default}
                    alt=""
                    className="indexMap__mapLocation8Light _2"
                />
                <img
                    src={require('@media/map/loc8-light-1.png')}
                    alt=""
                    className="indexMap__mapLocation8Window _1"
                />
                <img
                    src={require('@media/map/loc8-light-2.png')}
                    alt=""
                    className="indexMap__mapLocation8Window _2"
                />
                <img
                    src={require('@media/map/loc8-light-3.png')}
                    alt=""
                    className="indexMap__mapLocation8Window _3"
                />
                <img
                    src={require('@media/map/loc8-light-4.png')}
                    alt=""
                    className="indexMap__mapLocation8Window _4"
                />
                <img
                    src={require('@media/map/loc8-light-5.png')}
                    alt=""
                    className="indexMap__mapLocation8Fr _5"
                />
            </div>
        </>
    );
};

export default renderLocation8Decor;
