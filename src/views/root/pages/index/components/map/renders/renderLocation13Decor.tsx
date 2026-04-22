import React from 'react';

import I from '../types.ts';

const renderLocation13Decor: I['renderLocation13Decor'] = function () {
    return (
        <>
            <img
                src={require(`@media/map/loc13-light-1.png`)}
                alt=""
                className="indexMap__mapLocation13Light _1"
            />
            <img
                src={require(`@media/map/loc13-light-2.png`)}
                alt=""
                className="indexMap__mapLocation13Light _2"
            />
            <img
                src={require(`@media/map/loc13-light-3.png`)}
                alt=""
                className="indexMap__mapLocation13Ball"
            />
            <img
                src={require(`@media/map/map-loc-13-2.png`)}
                alt=""
                className="indexMap__mapLocation13Man"
            />
            <img
                src={require(`@media/map/map-loc-13-3.png`)}
                alt=""
                className="indexMap__mapLocation13Decor _1"
            />
            <img
                src={require(`@media/map/map-loc-13-4.png`)}
                alt=""
                className="indexMap__mapLocation13Decor _2"
            />
            <img
                src={require(`@media/map/map-loc-13-5.png`)}
                alt=""
                className="indexMap__mapLocation13Decor _3"
            />
            <img
                src={require(`@media/map/map-loc-13-5.png`)}
                alt=""
                className="indexMap__mapLocation13Decor _4"
            />
            <div className="indexMap__mapLocation13Dots">
                {new Array(13).fill({}).map((t, i) => (
                    <div
                        className={this.getClass(
                            'indexMap__mapLocation13Dot',
                            this.setClass(i + 1),
                        )}
                        key={i}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default renderLocation13Decor;
