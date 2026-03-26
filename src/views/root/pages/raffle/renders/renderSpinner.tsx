import React from 'react';

import I from '../types.ts';

const renderSpinner: I['renderSpinner'] = function () {
    return (
        <div className="raffle__spinner">
            <div className="raffle__spinnerArrow"></div>
            <div className="raffle__spinnerBack">
                <img
                    src={require('@media/inner/carousel-big.png')}
                    alt=""
                    className="raffle__spinnerBackImage"
                />
            </div>
        </div>
    );
};

export default renderSpinner;
