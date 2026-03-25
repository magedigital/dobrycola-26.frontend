import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="rules__head _COL _COL_H_CENTER">
            <h3 className="rules__headTitle _TITLE _inner">Как участвовать</h3>
            <p className="rules__headText _TITLE _sub _inner">C 01 апреля по 31 июля 2026</p>
        </div>
    );
};

export default renderHead;
