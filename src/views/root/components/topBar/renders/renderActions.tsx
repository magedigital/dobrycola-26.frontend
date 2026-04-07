import React from 'react';

import { appStore } from '@store/store.tsx';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';

const renderActions: I['renderActions'] = function () {
    const { setMenuState, mode } = this.props;

    return (
        <div className="topBar__actions">
            {mode === '5ka' && (
                <div
                    className="topBar__action _reg _ROW _ROW_CENTER _CLICK"
                    onClick={() => {
                        appStore.getState().setPopup({ name: 'chequePopup' });
                        setMenuState(false);
                    }}
                >
                    загрузить чек
                </div>
            )}
            {mode !== '5ka' && (
                <div
                    className="topBar__action _reg _ROW _ROW_CENTER _CLICK"
                    onClick={() => {
                        appStore.getState().setPopup({ name: 'codePopup' });
                        setMenuState(false);
                    }}
                >
                    Регистрация кода
                </div>
            )}

            <div
                className="topBar__action _profile _ROW _ROW_CENTER _CLICK"
                onClick={() => {
                    setMenuState(false);
                    AppRouter.changePage({ pageName: 'profile' });
                    sendGoal('profileBtn,headerProfileBtn');
                }}
            >
                ЛИЧНЫЙ КАБИНЕТ
            </div>
        </div>
    );
};

export default renderActions;
