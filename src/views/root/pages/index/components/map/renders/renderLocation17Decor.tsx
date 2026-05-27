import React from 'react';

import I from '../types.ts';

const renderLocation17Decor: I['renderLocation17Decor'] = function () {
    return (
        <>
            {[1, 2].map((k) => (
                <img
                    src={require(`@media/map/map-loc-17-light-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation17Light', this.setClass(k))}
                    key={k}
                />
            ))}
            {[1, 2].map((k) => (
                <img
                    src={require(`@media/map/map-loc-17-decor-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation17Decor', this.setClass(k))}
                    key={k}
                />
            ))}
            {[1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((k) => (
                <img
                    src={require(`@media/map/map-loc-17-man-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation17Man', this.setClass(k))}
                    key={k}
                />
            ))}
            <img
                src={require('@media/map/map-loc-17-ball.png')}
                alt=""
                className="indexMap__mapLocation17Ball"
            />
        </>
    );
};

export default renderLocation17Decor;
