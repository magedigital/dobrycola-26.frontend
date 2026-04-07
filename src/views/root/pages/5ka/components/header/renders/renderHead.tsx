import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="fivekaHeader__head _COL">
            <p className="fivekaHeader__headSubtitle">Акция только в «ПятёрочкЕ»</p>
            <h1 className="fivekaHeader__headTitle">
                Включай хип-хоп
                <br />и выигрывай
            </h1>
        </div>
    );
};

export default renderHead;
