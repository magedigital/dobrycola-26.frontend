import React from 'react';

import I from '../types.ts';

import { AppRouter } from '../../../../../../../index.tsx';

const renderCircle: I['renderCircle'] = function () {
    return (
        <div
            className="indexHeader__circle _CLICK"
            onMouseEnter={this.forceRotate.bind(this, true)}
            onMouseLeave={this.forceRotate.bind(this, false)}
            onClick={() => {
                AppRouter.changePage({ pageName: 'raffle' });
            }}
        >
            <div className="indexHeader__circleBack" />
        </div>
    );
};

export default renderCircle;
