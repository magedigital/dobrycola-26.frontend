import React from 'react';

import I from '../types.ts';

const renderLocation1Decor: I['renderLocation1Decor'] = function () {
    return (
        <>
            <div className="indexMap__mapLocation1Arrows">
                <img
                    src={require('@media/map/arrows-map-1-1.png')}
                    alt=""
                    className="indexMap__mapLocation1Arrow _1"
                />
                <img
                    src={require('@media/map/arrows-map-1-2.png')}
                    alt=""
                    className="indexMap__mapLocation1Arrow _2"
                />
                <img
                    src={require('@media/map/arrows-map-1-3.png')}
                    alt=""
                    className="indexMap__mapLocation1Arrow _3"
                />
            </div>
            {new Array(13).fill({}).map((i, t) => (
                <img
                    src={require(`@media/map/loc1-light-${t + 1}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation1Light', this.setClass(t + 1))}
                    key={t}
                />
            ))}
            <div className="indexMap__mapLocation1Scan _CLIP" data-scale="1" data-mobscale=".59">
                <svg viewBox="0 0 49 30" fill="none">
                    <clipPath id="mapLocation1Scan">
                        <path
                            d="M19.5 29.0159C13.6899 28.807 10.5145 27.959 5 25.5159C4.18033 17.5659 3.17314 13.1778 0 5.51586C5.60839 2.43163 9.27483 1.17661 17 0.0158607C22.0621 -0.0426563 24.9278 0.0471 30 0.515861C34.9437 1.70086 37.2755 2.46852 40.5 4.01586C43.2702 5.61039 44.3941 6.61588 46 8.51586C47.3663 10.2771 47.8853 11.262 48.5 13.0159C48.9423 14.8887 48.8646 15.9786 48 18.0159C46.763 20.4414 45.3054 21.7439 42 24.0159C37.9589 26.097 35.7716 26.9636 32 28.0159C27.5508 29.0393 24.8109 29.2357 19.5 29.0159Z"
                            fill="black"
                        />
                    </clipPath>
                </svg>
            </div>

            <div className="indexMap__mapLocation1Line _1 _CLIP" data-scale="1" data-mobscale=".6">
                <svg viewBox="0 0 37 113" fill="none">
                    <clipPath id="mapLocation1Line1">
                        <path
                            d="M15.5 0L5.5 42.5C7.66667 44.8333 12.7 49.4 17.5 61C23.5 75.5 21.5 90 15 96.5C11.3778 100.122 3.66667 103.833 0 105C0.833333 105.667 7.3 109.3 10.5 110.5C15.5 112.375 19 112.5 19 112.5L36.5 0.5C35.1667 1.16667 31.9 3.3 29.5 4.5C26.5 6 25.5 5 23.5 4C21.9 3.2 17 0.833333 15.5 0Z"
                            fill="black"
                        />
                    </clipPath>
                </svg>
            </div>
            <div
                className="indexMap__mapLocation1Line _2 _CLIP"
                data-scale="1.02"
                data-mobscale=".6"
            >
                <svg viewBox="0 0 49 89" fill="none">
                    <clipPath id="mapLocation1Line2">
                        <path
                            d="M20.5 0L0 11L11 61.5C13.1667 61.8333 17.4 62.5 23 64.5C30 67 33.5 74 33.5 77C34.1667 77 38.9 79.2 42.5 82C46.1 84.8 47.1667 87 48.5 88.5L20.5 0Z"
                            fill="black"
                        />
                    </clipPath>
                </svg>
            </div>
        </>
    );
};

export default renderLocation1Decor;
