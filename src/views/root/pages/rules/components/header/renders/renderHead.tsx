import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="productsHeader__head _COL _COL_H_CENTER">
            <h3 className="productsHeader__headTitle _TITLE">Как участвовать</h3>
            <p className="productsHeader__headText _TITLE _sub">01 ноября 2025 по 17 января 2026</p>
        </div>
    );
};

export default renderHead;
