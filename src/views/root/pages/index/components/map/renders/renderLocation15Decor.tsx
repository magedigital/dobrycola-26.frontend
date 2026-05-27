import React from 'react';

import I from '../types.ts';

const renderLocation15Decor: I['renderLocation15Decor'] = function () {
    return (
        <>
            {[1, 2, 3, 4, 5, 6].map((k) => (
                <img
                    src={require(`@media/map/map-loc-15-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation15Light', this.setClass(k))}
                    key={k}
                />
            ))}
            {[1, 2, 3, 4].map((k) => (
                <div
                    className={this.getClass('indexMap__mapLocation15Car', this.setClass(k))}
                    key={k}
                >
                    <img src={require(`@media/map/map-loc-15-car-${k}.png`)} alt="" />
                </div>
            ))}
        </>
    );
};

export default renderLocation15Decor;
