import React from 'react';

import I from '../types.ts';

const renderLocation6Decor: I['renderLocation6Decor'] = function () {
    return (
        <>
            <div className="indexMap__mapLocation6Arrows">
                <img
                    src={require('@media/map/arrows-map-2-1.png')}
                    alt=""
                    className="indexMap__mapLocation6Arrow _1"
                />
                <img
                    src={require('@media/map/arrows-map-2-2.png')}
                    alt=""
                    className="indexMap__mapLocation6Arrow _2"
                />
                <img
                    src={require('@media/map/arrows-map-2-3.png')}
                    alt=""
                    className="indexMap__mapLocation6Arrow _3"
                />
            </div>
            <img
                src={require('@media/map/map-loc-06-2.png')}
                alt=""
                className="indexMap__mapLocation6Ear"
            />
            <img
                src={require('@media/map/loc6-light-1.png')}
                alt=""
                className="indexMap__mapLocation6Light _1"
            />
            <img
                src={require('@media/map/loc6-light-2.png')}
                alt=""
                className="indexMap__mapLocation6Light _2"
            />
            <img
                src={require('@media/map/map-loc-06-3.png')}
                alt=""
                className="indexMap__mapLocation6Floor _1"
            />
            <img
                src={require('@media/map/map-loc-06-4.png')}
                alt=""
                className="indexMap__mapLocation6Floor _2"
            />
            <div className="indexMap__mapLocation6Shadow"></div>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((k) => (
                <img
                    src={require(`@media/map/loc6-decor-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation6Decor', this.setClass(k))}
                    key={k}
                />
            ))}
        </>
    );
};

export default renderLocation6Decor;
