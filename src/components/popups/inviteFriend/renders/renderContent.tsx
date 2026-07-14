import React from 'react';

import I from '../types.ts';

import { AppRouter } from '../../../../index.tsx';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popupAction _inviteFriend _COL">
            <h3 className="popupAction__title">Дополнительные баллы от Добрый®!</h3>
            <div className="popupAction__content _COL">
                <p className="popupAction__contentSupport">
                    Только <span>с 15 по 31 июля 2026</span> получи +2&nbsp;балла за каждого
                    приглашенного друга, который зарегистрирует код с&nbsp;упаковок Добрый®.
                </p>
                <div className="popupAction__contentSteps">
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Скопируй</h4>
                        <p className="popupAction__contentStepText">
                            свою реферальную ссылку <br className="_MOBILE" />в{' '}
                            <span
                                className="_link"
                                onClick={() => {
                                    AppRouter.changePage({ pageName: 'profile' });
                                }}
                            >
                                Личном кабинете
                            </span>
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Поделись</h4>
                        <p className="popupAction__contentStepText">ссылкой с друзьями</p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Получи</h4>
                        <p className="popupAction__contentStepText">
                            2 балла за каждого друга, который зарегистрирует код с упаковок
                            Добрый®.
                        </p>
                    </div>
                </div>
            </div>
            <p className="popupAction__offer">Так звучит твоё лето!</p>
        </div>
    );
};

export default renderContent;
