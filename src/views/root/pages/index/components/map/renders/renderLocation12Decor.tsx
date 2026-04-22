import React from 'react';

import I from '../types.ts';

const renderLocation12Decor: I['renderLocation12Decor'] = function () {
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((k) => (
                <img
                    src={require(`@media/map/loc12-dynamic-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation12Dynamic', this.setClass(k))}
                    key={k}
                />
            ))}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((k) => (
                <img
                    src={require(`@media/map/loc12-decor-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation12Decor', this.setClass(k))}
                    key={k}
                />
            ))}
        </>
    );
};

export default renderLocation12Decor;
