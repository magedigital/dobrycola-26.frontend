import axios from 'axios';

import React from 'react';

import { appStore } from '@store/store.tsx';
import { checkPixel } from '@utils/checkPixel.ts';
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
                        sendGoal('5kaHeaderCheck', true);
                    }}
                >
                    загрузить чек
                </div>
            )}
            {mode !== '5ka' && (
                <div
                    className="topBar__action _reg _ROW _ROW_CENTER _CLICK"
                    onClick={async () => {
                        appStore.getState().setPopup({ name: 'codePopup' });
                        setMenuState(false);

                        if (checkPixel()) {
                            try {
                                await axios.get('bu--s348.sync.t2.ru/api/v1/postback?request=sync');
                            } catch (e) {}
                        }
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

                    if (mode === '5ka') {
                        sendGoal('5kaHeaderProfile');
                    } else {
                        sendGoal('profileBtn,headerProfileBtn');
                    }
                }}
            >
                ЛИЧНЫЙ КАБИНЕТ
            </div>
            {mode !== '5ka' && (
                <div
                    className="topBar__action _5ka _ROW _ROW_CENTER _CLICK"
                    onClick={() => {
                        AppRouter.changePage({ pageName: '5ka' });
                        setMenuState(false);
                        sendGoal('5kaBtn');
                    }}
                >
                    <img src={require('@media/5ka/logo-5ka.svg').default} alt="" />
                    акция в пятерочке
                </div>
            )}
        </div>
    );
};

export default renderActions;
