import React from 'react';

import I from '../types.ts';

const renderLocation16Decor: I['renderLocation16Decor'] = function () {
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => (
                <img
                    src={require(`@media/map/map-loc-16-decor-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation16Decor', this.setClass(k))}
                    key={k}
                />
            ))}
            {[1, 2, 3, 4, 5].map((k) => (
                <img
                    src={require(`@media/map/map-loc-16-light-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation16Light', this.setClass(k))}
                    key={k}
                />
            ))}
            {[1, 2, 3, 4, 5].map((k) => (
                <img
                    src={require(`@media/map/map-loc-16-man-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation16Man', this.setClass(k))}
                    key={k}
                />
            ))}
            {[1, 2, 3].map((k) => (
                <img
                    src={require(`@media/map/map-loc-16-dynamic-${k}-left.png`)}
                    alt=""
                    className={this.getClass(
                        'indexMap__mapLocation16DynamicLeft',
                        this.setClass(k),
                    )}
                    key={k}
                />
            ))}
            {[1, 2, 3].map((k) => (
                <img
                    src={require(`@media/map/map-loc-16-dynamic-${k}-right.png`)}
                    alt=""
                    className={this.getClass(
                        'indexMap__mapLocation16DynamicRight',
                        this.setClass(k),
                    )}
                    key={k}
                />
            ))}
        </>
    );
};

export default renderLocation16Decor;
