import React from 'react';

import Button from '@components/button/Button.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popupAction _diksi _COL">
            <p className="popupAction__support">Акция Добрый в «дикси»</p>
            <h3 className="popupAction__title">
                ВКЛЮЧАЙ латино И&nbsp;ВЫИГРЫВАЙ ПОЕЗДКУ <br className="_DESKTOP" />
                нА&nbsp;500 000 РУБЛЕЙ НА&nbsp;МУЗЫКАЛЬНЫЙ ФЕСТИВАЛЬ НА ДВОИХ
            </h3>
            <div className="popupAction__content _COL">
                <p className="popupAction__contentSupport">С 11 мая по 21 июня 2026 года:</p>
                <div className="popupAction__contentSteps">
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Подтверди</h4>
                        <p className="popupAction__contentStepText">
                            участие в приложении
                            <br />
                            «Дикси клуб друзей и доставка»
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">купи или закажи</h4>
                        <p className="popupAction__contentStepText">
                            Добрый® и/или BURN® с картой <br />
                            Клуб друзей Дикси
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">выигрывай</h4>
                        <p className="popupAction__contentStepText">призы</p>
                    </div>
                </div>
                <div className="popupAction__contentButton">
                    <Button
                        className="_boldBorder _pinkColor"
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
                                    src={require('@media/popups/prizes-pp-diksi-1.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">Стильный мерч</p>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-diksi-2.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                наушники со <br />
                                съёмными стикерами
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderContent;
