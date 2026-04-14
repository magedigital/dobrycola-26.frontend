import React from 'react';

import I from '../types.ts';

const renderDecors: I['renderDecors'] = function () {
    return (
        <>
            {this.renderDecor1()}
            {this.renderDecor2()}
            {this.renderDecor3()}
        </>
    );
};

export default renderDecors;
