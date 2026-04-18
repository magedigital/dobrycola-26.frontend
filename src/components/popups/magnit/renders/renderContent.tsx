import React from 'react';

import Button from '@components/button/Button.tsx';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popupAction _magnit _COL">
            <p className="popupAction__support">Акция Добрый в «Магнит»</p>
            <h3 className="popupAction__title">
                ВКЛЮЧАЙ POP И&nbsp;ВЫИГРЫВАЙ ПОЕЗДКУ
                <br />
                за 1 000 000 рублей на двоих <br className="_DESKTOP" />
                НА МУЗЫКАЛЬНЫЙ ФЕСТИВАЛЬ В ГОНКОНГЕ!
            </h3>
            <div className="popupAction__content _COL">
                <p className="popupAction__contentSupport">С 15 апреля по 09 июня 2026 года:</p>
                <div className="popupAction__contentSteps">
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Подтверди</h4>
                        <p className="popupAction__contentStepText">
                            участие в Приложении «Магнит»
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Купи или закажи</h4>
                        <p className="popupAction__contentStepText">
                            от&nbsp;1 шт. напитки Добрый® и/или BURN® с&nbsp;Картой Магнит плюс
                            из&nbsp;приложения
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Участвуй</h4>
                        <p className="popupAction__contentStepText">в розыгрыше 8 тысяч призов!</p>
                    </div>
                </div>
                <div className="popupAction__contentButton">
                    <Button
                        className="_boldBorder _greenColor"
                        onClick={() => {
                            window.open(
                                'https://2814495.redirect.appmetrica.yandex.com/raffles/raffle/multon_priz?analytics_promo_id=multon_priz&analytics_promo_type=raffle&source=banner&appmetrica_tracking_id=1110633687315139443&referrer=reattribution%3D1',
                                '_blank',
                            );
                            sendGoal('mapPopupMagnitToBtn');
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
                                    src={require('@media/popups/prizes-pp-magnit-1.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                Стильный
                                <br className="_DESKTOP" /> мерч
                            </p>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-magnit-2.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                Модные <br className="_DESKTOP" />
                                гаджеты
                            </p>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-magnit-3.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                Гарантированно <br />
                                бонусы Магнит первым
                                <br />
                                20 000 участникам
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderContent;
