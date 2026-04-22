import React from 'react';

import I from '../types.ts';

const renderLocation10Decor: I['renderLocation10Decor'] = function () {
    return (
        <>
            <img
                src={require('@media/map/loc10-star.png')}
                alt=""
                className="indexMap__mapLocation10Star"
            />
            <img
                src={require('@media/map/map-loc-10-2.png')}
                alt=""
                className="indexMap__mapLocation10Man"
            />
            <div className="indexMap__mapLocation10Ball"></div>
            <img
                src={require('@media/map/loc10-light-1.svg').default}
                alt=""
                className="indexMap__mapLocation10Light _1"
            />
            <img
                src={require('@media/map/loc10-light-2.svg').default}
                alt=""
                className="indexMap__mapLocation10Light _2"
            />
            <img
                src={require('@media/map/loc10-light-3.svg').default}
                alt=""
                className="indexMap__mapLocation10Light _3"
            />
            <img
                src={require('@media/map/loc10-light-4.svg').default}
                alt=""
                className="indexMap__mapLocation10Light _4"
            />
            <div className="indexMap__mapLocation10Dots">
                {new Array(13).fill({}).map((t, i) => (
                    <div
                        className={this.getClass(
                            'indexMap__mapLocation10Dot',
                            this.setClass(i + 1),
                        )}
                        key={i}
                    ></div>
                ))}
            </div>

            {new Array(12).fill({}).map((t, i) => (
                <img
                    key={i}
                    src={require(`@media/map/loc10-decor-${i + 1}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation10Decor', this.setClass(i + 1))}
                />
            ))}
            <img
                src={require('@media/map/loc10-parts-1.png')}
                alt=""
                className="indexMap__mapLocation10Parts _1"
            />
            <img
                src={require('@media/map/loc10-parts-2.png')}
                alt=""
                className="indexMap__mapLocation10Parts _2"
            />
        </>
    );
};

export default renderLocation10Decor;
