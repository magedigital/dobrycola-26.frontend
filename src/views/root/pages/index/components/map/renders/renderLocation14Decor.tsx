import React from 'react';

import I from '../types.ts';

const renderLocation14Decor: I['renderLocation14Decor'] = function () {
    return (
        <>
            <img
                src={require(`@media/map/map-loc-14-2.png`)}
                alt=""
                className="indexMap__mapLocation14Guitar"
            />
            {[1, 2, 3, 4, 5, 6].map((k) => (
                <img
                    src={require(`@media/map/loc14-dynamic-1.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation14Dynamic', this.setClass(k))}
                    key={k}
                />
            ))}
            <img
                src={require('@media/map/map-loc-14-3.png')}
                alt=""
                className="indexMap__mapLocation14Decor _1"
            />
            <img
                src={require('@media/map/map-loc-14-4.png')}
                alt=""
                className="indexMap__mapLocation14Decor _2"
            />
            <img
                src={require('@media/map/map-loc-14-5.png')}
                alt=""
                className="indexMap__mapLocation14Decor _3"
            />
            <img
                src={require('@media/map/map-loc-14-6.png')}
                alt=""
                className="indexMap__mapLocation14Decor _4"
            />
            <img
                src={require('@media/map/loc14-star.svg').default}
                alt=""
                className="indexMap__mapLocation14Star"
            />
        </>
    );
};

export default renderLocation14Decor;
