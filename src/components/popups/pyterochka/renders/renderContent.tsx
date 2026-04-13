import React from 'react';

import Button from '@components/button/Button.tsx';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

import { AppRouter } from '../../../../index.tsx';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popupAction _5ka _COL">
            <p className="popupAction__support">Акция Добрый в «Пятёрочке»</p>
            <h3 className="popupAction__title">
                ВКЛЮЧАЙ ХИП –ХОП И&nbsp;ВЫИГРЫВАЙ ПОЕЗДКУ <br className="_MOBILE" />
                ЗА&nbsp;1 000 000 РУБЛЕЙ <br className="_MOBILE" />
                НА МУЗЫКАЛЬНЫЙ ФЕСТИВАЛЬ НА ДВОИХ
            </h3>
            <div className="popupAction__content _COL">
                <p className="popupAction__contentSupport">С 13 апреля по 14 июня 2026 года:</p>
                <div className="popupAction__contentSteps">
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Покупай</h4>
                        <p className="popupAction__contentStepText">
                            газированные напитки Добрый® или&nbsp;BURN® в «Пятёрочке»{' '}
                            <br className="_MOBILE" />
                            или в доставке «Пятёрочки»
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Регистрируй чеки</h4>
                        <p className="popupAction__contentStepText">
                            на{' '}
                            <a href="https://dobrycola-promo.ru/" rel="noreferrer" target="_blank">
                                сайте
                            </a>
                            , в{' '}
                            <a
                                href="https://t.me/dobrycola_promo_bot"
                                rel="noreferrer"
                                target="_blank"
                            >
                                боте
                            </a>{' '}
                            или <br className="_MOBILE" />в{' '}
                            <a
                                href="https://4493398.redirect.appmetrica.yandex.com/?appmetrica_tracking_id=966528812613420193&referrer=reattribution%3D1"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Добрый Винбокс
                            </a>
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Участвуй</h4>
                        <p className="popupAction__contentStepText">
                            в розыгрыше ценных призов, а&nbsp;также обменивай чеки на призы
                        </p>
                    </div>
                </div>
                <div className="popupAction__contentButton">
                    <Button
                        className="_boldBorder _lightGreenColor"
                        onClick={() => {
                            localStorage.setItem('5ka-popup', 'true');
                            AppRouter.changePage({ pageName: '5ka' });
                            sendGoal('popup5kaBtn');
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
                                    src={require('@media/popups/5ka-prize-1.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/5ka-prize-2.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="popupAction__prizesSupport">и другие призы</p>
            </div>
        </div>
    );
};

export default renderContent;
