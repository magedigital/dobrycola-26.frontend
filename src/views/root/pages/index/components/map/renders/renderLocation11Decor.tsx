import React from 'react';

import I from '../types.ts';

const renderLocation11Decor: I['renderLocation11Decor'] = function () {
    return (
        <>
            <img
                src={require('@media/map/loc11-trees.png')}
                alt=""
                className="indexMap__mapLocation11Trees"
            />
            <div className="indexMap__mapLocation11Top _CLIP" data-scale="1.03" data-mobscale=".6">
                <div className="indexMap__mapLocation11Light"></div>
                <svg viewBox="0 0 68 76" fill="none">
                    <clipPath id="mapLoc11Top">
                        <path
                            d="M0 70.5V35.048L68 0V47.5L14.5 75.5L8.5 73.5L0 70.5Z"
                            fill="black"
                        />
                    </clipPath>
                </svg>
            </div>
            <div className="indexMap__mapLocation11Window _1">
                <div className="indexMap__mapLocation11Light"></div>
            </div>
            <div className="indexMap__mapLocation11Window _2">
                <div className="indexMap__mapLocation11Light"></div>
            </div>
            <div className="indexMap__mapLocation11Window _3">
                <div className="indexMap__mapLocation11Light"></div>
            </div>
            <div className="indexMap__mapLocation11Window _4">
                <div className="indexMap__mapLocation11Light"></div>
            </div>
            <div className="indexMap__mapLocation11Window _5">
                <div className="indexMap__mapLocation11Light"></div>
            </div>
            <div className="indexMap__mapLocation11Window _6">
                <div className="indexMap__mapLocation11Light"></div>
            </div>
            <div className="indexMap__mapLocation11Window _7">
                <div className="indexMap__mapLocation11Light"></div>
            </div>
            <div className="indexMap__mapLocation11Window _8">
                <div className="indexMap__mapLocation11Light"></div>
            </div>
            <img
                src={require('@media/map/map-loc-11-1.png')}
                alt=""
                className="indexMap__mapLocation11Man"
            />
            <img
                src={require('@media/map/map-loc-11-2.png')}
                alt=""
                className="indexMap__mapLocation11Peoples"
            />
        </>
    );
};

export default renderLocation11Decor;
