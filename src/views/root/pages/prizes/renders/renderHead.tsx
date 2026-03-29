import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="profile__head _COL _COL_H_CENTER">
            <h3 className="profile__headTitle _TITLE _inner">Призы</h3>
        </div>
    );
};

export default renderHead;
