import React from 'react';

import I from '../types.ts';

const renderFires: I['renderFires'] = function () {
    return (
        <div className="raffle__fires">
            <canvas />
        </div>
    );
};

export default renderFires;
