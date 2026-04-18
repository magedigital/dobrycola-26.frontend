import React from 'react';

import I from '../types.ts';

const renderLocation5Decor: I['renderLocation5Decor'] = function () {
    return (
        <>
            <img
                src={require('@media/map/map-loc-05-2.png')}
                alt=""
                className="indexMap__mapLocation5Head"
            />
            <div className="indexMap__mapLocation5Prize _CLIP" data-scale="1.02" data-mobscale=".58">
                <svg viewBox="0 0 178 96" fill="none">
                    <clipPath id="mapLocation5Prize">
                        <path
                            d="M90.3183 0.115712L177.217 46.0059C177.92 46.3775 177.929 47.3824 177.232 47.7662L90.3334 95.6092C90.036 95.7729 89.6759 95.7746 89.377 95.6137L0.525829 47.7707C-0.182235 47.3895 -0.173477 46.3708 0.541038 46.0018L89.3924 0.111493C89.6831 -0.0386622 90.0289 -0.0370878 90.3183 0.115712Z"
                            fill="black"
                        />
                    </clipPath>
                </svg>
            </div>
        </>
    );
};

export default renderLocation5Decor;
