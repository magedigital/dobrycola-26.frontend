import React from 'react';

import I from '../types.ts';

const renderCircle: I['renderCircle'] = function () {
    return (
        <div
            className="indexHeader__circle _CLICK"
            onMouseEnter={this.forceRotate.bind(this, true)}
            onMouseLeave={this.forceRotate.bind(this, false)}
        >
            <div className="indexHeader__circleBack" />
        </div>
    );
};

export default renderCircle;
