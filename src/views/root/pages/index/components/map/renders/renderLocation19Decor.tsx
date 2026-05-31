import React from 'react';

import I from '../types.ts';

const renderLocation19Decor: I['renderLocation19Decor'] = function () {
    return (
        <>
            {[1, 2, 3, 4, 5].map((k) => (
                <img
                    src={require(`@media/map/map-loc-19-man-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation19Man', this.setClass(k))}
                    key={k}
                />
            ))}
            {[1, 2].map((k) => (
                <img
                    src={require(`@media/map/map-loc-19-top-light-${k}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation19TopLight', this.setClass(k))}
                    key={k}
                />
            ))}
            {[1, 2, 3, 4].map((k) => (
                <img
                    src={require(`@media/map/map-loc-19-circle-light-${k}.png`)}
                    alt=""
                    className={this.getClass(
                        'indexMap__mapLocation19CircleLight',
                        this.setClass(k),
                    )}
                    key={k}
                />
            ))}
            <img
                src={require(`@media/map/map-loc-19-lines.png`)}
                alt=""
                className={this.getClass('indexMap__mapLocation19Lines')}
            />
            <img
                src={require(`@media/map/map-loc-19-decor-left.png`)}
                alt=""
                className={this.getClass('indexMap__mapLocation19Decor _left')}
            />
            <img
                src={require(`@media/map/map-loc-19-decor-right.png`)}
                alt=""
                className={this.getClass('indexMap__mapLocation19Decor _right')}
            />
        </>
    );
};

export default renderLocation19Decor;
