import React from 'react';

import I from '../types.ts';

const renderLocation1Decor: I['renderLocation1Decor'] = function () {
    return (
        <>
            {new Array(13).fill({}).map((i, t) => (
                <img
                    src={require(`@media/map/loc1-light-${t + 1}.png`)}
                    alt=""
                    className={this.getClass('indexMap__mapLocation1Light', this.setClass(t + 1))}
                    key={t}
                />
            ))}
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
