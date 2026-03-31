import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="popup__head _COL _COL_H_CENTER">
            <div className="popup__title">Заказ приза</div>
            <p className="popup__description">Выбери приз и&nbsp;нажми «Заказать приз»:</p>
        </div>
    );
};

export default renderHead;
