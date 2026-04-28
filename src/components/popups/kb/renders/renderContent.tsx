import React from 'react';

import Button from '@components/button/Button.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popupAction _kb _COL">
            <p className="popupAction__support">Акция Добрый в «КРасное и белое»</p>
            <h3 className="popupAction__title">
                ВКЛЮЧАЙ рок И ВЫИГРЫВАЙ ПОЕЗДКУ НА&nbsp;МУЗЫКАЛЬНЫЙ ФЕСТИВАЛЬ на двоих
            </h3>
            <div className="popupAction__content _COL">
                <p className="popupAction__contentSupport">С 18 мая по 12 июля 2026 года:</p>
                <div className="popupAction__contentSteps">
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">активируй кешбэк</h4>
                        <p className="popupAction__contentStepText">в Приложении «Т-Банк»</p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">покупай</h4>
                        <p className="popupAction__contentStepText">
                            газированные напитки Добрый®
                            <br className="_MOBILE" />
                            и/или BURN® в&nbsp;сети «Красное и&nbsp;Белое»
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">оплачивай</h4>
                        <p className="popupAction__contentStepText">покупку картой Т-Банк</p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">выигрывай</h4>
                        <p className="popupAction__contentStepText">
                            поездку на музыкальный фестиваль для двоих и другие призы
                        </p>
                    </div>
                </div>
                <div className="popupAction__contentButton">
                    <Button
                        className="_boldBorder _orangeColor"
                        onClick={() => {
                            // window.open(
                            //     'https://2814495.redirect.appmetrica.yandex.com/raffles/raffle/multon_priz?analytics_promo_id=multon_priz&analytics_promo_type=raffle&source=banner&appmetrica_tracking_id=1110633687315139443&referrer=reattribution%3D1',
                            //     '_blank',
                            // );
                            // sendGoal('mapPopupMagnitToBtn');
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
                                    src={require('@media/popups/prizes-pp-kb-1.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                стильные
                                <br className="_DESKTOP" /> футболки
                            </p>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-kb-2.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                трендовые <br className="_DESKTOP" />
                                гаджеты
                            </p>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-kb-3.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                Гарантированно <br />
                                кешбэк на первую <br />
                                покупку
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderContent;
