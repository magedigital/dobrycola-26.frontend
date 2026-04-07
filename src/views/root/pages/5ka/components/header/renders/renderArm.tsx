import React from 'react';

import I from '../types.ts';

const renderArm: I['renderArm'] = function () {
    return (
        <div className="fivekaHeader__arm">
            <img
                src={require('@media/5ka/back-5ka-hand-1.png')}
                alt=""
                className="fivekaHeader__armThumb"
            />
            <img
                src={require('@media/5ka/back-5ka-hand-2.png')}
                alt=""
                className="fivekaHeader__armItem"
            />
        </div>
    );
};

export default renderArm;
