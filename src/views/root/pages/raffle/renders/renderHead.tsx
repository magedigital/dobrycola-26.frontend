import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    const { isComplete } = this.state;

    return (
        <div className="raffle__head _COL _COL_H_CENTER">
            <h3 className="raffle__headTitle _TITLE _inner">Карусель призов</h3>
            <p className="raffle__headText _TITLE _sub _inner _lightColor">
                {isComplete ? 'Твой приз:' : 'Вращай и узнай свой приз'}
            </p>
        </div>
    );
};

export default renderHead;
