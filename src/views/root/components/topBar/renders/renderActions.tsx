import React from 'react';

import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';

const renderActions: I['renderActions'] = function () {
    const { setMenuState } = this.props;

    return (
        <div className="topBar__actions">
            <div
                className="topBar__action _reg _ROW _ROW_CENTER _CLICK"
                onClick={() => {
                    setMenuState(false);
                }}
            >
                Регистрация кода
            </div>
            <div
                className="topBar__action _profile _ROW _ROW_CENTER _CLICK"
                onClick={() => {
                    setMenuState(false);
                    AppRouter.changePage({ pageName: 'profile' });
                }}
            >
                ЛИЧНЫЙ КАБИНЕТ
            </div>
        </div>
    );
};

export default renderActions;
