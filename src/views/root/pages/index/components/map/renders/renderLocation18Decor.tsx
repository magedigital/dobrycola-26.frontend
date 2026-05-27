import React from 'react';

import I from '../types.ts';

const renderLocation18Decor: I['renderLocation18Decor'] = function () {
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((k) => (
                <img
                    src={require(`@media/map/map-loc-18-light.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation18Dot', this.setClass(k))}
                    key={k}
                />
            ))}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => (
                <img
                    src={require(`@media/map/map-loc-18-man-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation18Man', this.setClass(k))}
                    key={k}
                />
            ))}
            {[1, 2, 3, 4, 5, 6].map((k) => (
                <img
                    src={require(`@media/map/map-loc-18-light-${k}.svg`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation18Light', this.setClass(k))}
                    key={k}
                />
            ))}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((k) => (
                <img
                    src={require(`@media/map/map-loc-18-decor-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation18Decor', this.setClass(k))}
                    key={k}
                />
            ))}
            <div className="indexMap__mapLocation18Ball">
                {new Array(13).fill({}).map((t, i) => (
                    <div
                        className={this.getClass(
                            'indexMap__mapLocation18BallDot',
                            this.setClass(i + 1),
                        )}
                        key={i}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default renderLocation18Decor;
