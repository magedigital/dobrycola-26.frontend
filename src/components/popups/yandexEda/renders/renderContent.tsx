import React from 'react';

import Button from '@components/button/Button.tsx';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popupAction _yandexEda _COL">
            <p className="popupAction__support">Акция Добрый в «яндекс.еда»</p>
            <h3 className="popupAction__title">
                Распаковка 2026: участвуй в розыгрыше и&nbsp;выигрывай билеты на&nbsp;музыкальную
                премию и&nbsp;путешествие
            </h3>
            <div className="popupAction__content _COL">
                <p className="popupAction__contentSupport">С 04 июня по 01 июля 2026 года:</p>
                <div className="popupAction__contentSteps">
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">купи</h4>
                        <p className="popupAction__contentStepText">
                            напитки Добрый® от 1 000 руб.
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">получи</h4>
                        <p className="popupAction__contentStepText">
                            промокод на 100 руб. на следующую покупку напитков Добрый®
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">ВЫиграй</h4>
                        <p className="popupAction__contentStepText">крутые призы</p>
                    </div>
                </div>
                <div className="popupAction__contentButton">
                    <Button
                        className="_boldBorder _yellowColor"
                        onClick={() => {
                            window.open('https://eda.yandex/promo/multon-muz-2026', '_blank');
                            sendGoal('mapPopupYandexedaToBtn');
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
                                    src={require('@media/popups/prizes-pp-eda-1.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                билеты на премию <br />
                                яндекс.музыки <br />
                                «распаковка 26»
                            </p>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-eda-2.png')}
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
