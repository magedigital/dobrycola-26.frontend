import React from 'react';

import Button from '@components/button/Button.tsx';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popupAction _yandexLavka _COL">
            <p className="popupAction__support">Акция Добрый в «яндекс.лавка»</p>
            <h3 className="popupAction__title">участвуй в розыгрыше и выигрывай путешествие</h3>
            <div className="popupAction__content _COL">
                <p className="popupAction__contentSupport">С 01 июня по 21 июня 2026 года:</p>
                <div className="popupAction__contentSteps">
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">купи</h4>
                        <p className="popupAction__contentStepText">8 напитков Добрый®</p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">получи</h4>
                        <p className="popupAction__contentStepText">
                            промокод на 150 руб. на следующую покупку напитков Добрый®
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">ВЫиграй</h4>
                        <p className="popupAction__contentStepText">крутой приз</p>
                    </div>
                </div>
                <div className="popupAction__contentButton">
                    <Button
                        className="_boldBorder _blue2Color"
                        onClick={() => {
                            window.open(
                                'https://lavka.yandex.ru/catalog/promo/category/dobriy',
                                '_blank',
                            );
                            sendGoal('mapPopupYandexlavkaToBtn');
                        }}
                    >
                        Участвовать
                    </Button>
                </div>
            </div>
            <div className="popupAction__prizes">
                <div className="popupAction__prizesItems">
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-lavka-1.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">путешествие мечты</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderContent;
