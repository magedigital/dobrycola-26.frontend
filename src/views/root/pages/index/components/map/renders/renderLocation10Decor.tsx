import React from 'react';

import I from '../types.ts';

const renderLocation10Decor: I['renderLocation10Decor'] = function () {
    return (
        <>
            {new Array(2).fill({}).map((t, i) => (
                <img
                    key={i}
                    src={require(`@media/map/map-loc-10-window-${i + 1}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation10Window', this.setClass(i + 1))}
                />
            ))}
            {new Array(2).fill({}).map((t, i) => (
                <img
                    key={i}
                    src={require(`@media/map/map-loc-10-dynamic-${i + 1}.png`)}
                    alt=""
                    className={this.getClass(
                        'indexMap__mapLocation10Dynamic',
                        this.setClass(i + 1),
                    )}
                />
            ))}
            {new Array(3).fill({}).map((t, i) => (
                <img
                    key={i}
                    src={require(`@media/map/map-loc-10-light-${i + 1}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation10Light', this.setClass(i + 1))}
                />
            ))}
            <img
                src={require('@media/map/map-loc-10-light-4.png')}
                alt=""
                className="indexMap__mapLocation10MinLight"
            />
            {new Array(10).fill({}).map((t, i) => (
                <img
                    key={i}
                    src={require(`@media/map/map-loc-10-man-${i + 1}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation10Man', this.setClass(i + 1))}
                />
            ))}
            {new Array(8).fill({}).map((t, i) => (
                <img
                    key={i}
                    src={require(`@media/map/map-loc-10-light-${i + 1}.svg`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation10Flash', this.setClass(i + 1))}
                />
            ))}
        </>
    );
};

export default renderLocation10Decor;
