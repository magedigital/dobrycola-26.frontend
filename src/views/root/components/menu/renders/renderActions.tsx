import React from 'react';

import Button from '@components/button/Button.tsx';
import { appStore } from '@store/store.tsx';

import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';

const renderActions: I['renderActions'] = function () {
    const { setState } = this.props;

    return (
        <div className="menu__actions">
            <div className="menu__actionsButton">
                <Button
                    className="_purpleColor"
                    onClick={() => {
                        appStore.getState().setPopup({ name: 'codePopup' });
                        setState(false);
                    }}
                >
                    Регистрация кода
                </Button>
            </div>
            <div className="menu__actionsButton">
                <Button
                    className="_pinkColor"
                    onClick={() => {
                        AppRouter.changePage({ pageName: 'profile' });
                        setState(false);
                    }}
                >
                    Личный кабинет
                </Button>
            </div>
        </div>
    );
};

export default renderActions;
