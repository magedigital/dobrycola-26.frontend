import React from 'react';

import I from '../types.ts';

const renderLocation7Decor: I['renderLocation7Decor'] = function () {
    return (
        <>
            <div className="indexMap__mapLocation7Grid _1">
                {new Array(18).fill({}).map((t, i) => (
                    <div className="indexMap__mapLocation7GridItem" key={i} />
                ))}
            </div>
            <div className="indexMap__mapLocation7Grid _2 _CLIP" data-scale="1" data-mobscale=".65">
                <svg viewBox="0 0 30 37" fill="none">
                    <clipPath id="loc7Grid2">
                        <path d="M29.5 0V37L0 22.5L14.5 9C20.5087 3.86352 23.824 1.75639 29.5 0Z" />
                    </clipPath>
                </svg>
                <div className="indexMap__mapLocation7GridInner">
                    {new Array(36).fill({}).map((t, i) => (
                        <div className="indexMap__mapLocation7GridItem" key={i} />
                    ))}
                </div>
            </div>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((t) => (
                <img
                    src={require(`@media/map/loc7-light-${t}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation7Light', this.setClass(t))}
                    key={t}
                />
            ))}
            <img
                src={require('@media/map/loc7-dynamic.png')}
                alt=""
                className="indexMap__mapLocation7Dynamic _1"
            />
            <img
                src={require('@media/map/loc7-dynamic.png')}
                alt=""
                className="indexMap__mapLocation7Dynamic _2"
            />
            <img
                src={require('@media/map/loc7-top-light-1.png')}
                alt=""
                className="indexMap__mapLocation7TopLight _1"
            />
            <img
                src={require('@media/map/loc7-top-light-2.png')}
                alt=""
                className="indexMap__mapLocation7TopLight _2"
            />
        </>
    );
};

export default renderLocation7Decor;
