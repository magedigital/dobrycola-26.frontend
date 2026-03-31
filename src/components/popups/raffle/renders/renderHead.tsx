import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="popup__head _COL _COL_H_CENTER">
            <div className="popup__title">Мгновенный розыгрыш</div>
        </div>
    );
};

export default renderHead;
