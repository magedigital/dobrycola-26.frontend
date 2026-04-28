import React from 'react';

import Button from '@components/button/Button.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popupAction _lenta _COL">
            <p className="popupAction__support">Акция Добрый в «ЛЕНТА»</p>
            <h3 className="popupAction__title">
                ВКЛЮЧАЙ техно И ВЫИГРЫВАЙ ПОЕЗДКУ <br />
                НА МУЗЫКАЛЬНЫЙ ФЕСТИВАЛЬ В тайланде <br />
                на двоих за 500 000 рублей!
            </h3>
            <div className="popupAction__content _COL">
                <p className="popupAction__contentSupport">С 1 мая по 30 июня 2026 года:</p>
                <div className="popupAction__contentSteps">
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">регистрируй карту №1*</h4>
                        <p className="popupAction__contentStepText">на сайте</p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">покупай</h4>
                        <p className="popupAction__contentStepText">
                            газированные напитки Добрый® <br className="_MOBILE" />
                            и/или BURN® с&nbsp;Картой №1
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Участвуй в розыгрыше</h4>
                        <p className="popupAction__contentStepText">
                            ценных призов, а также обменивай чеки на призы
                        </p>
                    </div>
                </div>
                <div className="popupAction__contentButton">
                    <Button
                        className="_boldBorder _darkBlueColor"
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
                                    src={require('@media/popups/prizes-pp-lenta-1.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">стильные футболки</p>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-lenta-2.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                наушники
                                <br />с набором стикеров
                            </p>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-lenta-3.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                Гарантированно 100 бонусов
                                <br />
                                Лента первым 2 000 участников
                                <br />
                                за покупку от 2х единиц
                                <br />
                                продукции в одном чеке
                            </p>
                        </div>
                    </div>
                </div>
                <p className="popupAction__prizesSupport">
                    *№1 по количеству покупателей, считающих, что&nbsp;программа лояльности <br className='_DESKTOP' />
                    по Карте №1 — выгодная (опрос покупателей «Ленты», 2025).
                </p>
            </div>
        </div>
    );
};

export default renderContent;
