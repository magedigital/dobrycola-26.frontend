import React from 'react';

import Button from '@components/button/Button.tsx';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popupAction _magnit _COL">
            <p className="popupAction__support">Акция Добрый в «Магнит»</p>
            <h3 className="popupAction__title">пойдём с нами?</h3>
            <div className="popupAction__content _COL">
                <p className="popupAction__contentSupport">С 10 июня по 01 сентября 2026 года:</p>
                <div className="popupAction__contentSteps">
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">купи или закажи</h4>
                        <p className="popupAction__contentStepText">
                            Добрый®, RICH® или BURN® в&nbsp;магазинах Магнит с QR-кодом
                            из&nbsp;приложения*.
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">ВЫбирай</h4>
                        <p className="popupAction__contentStepText">призы и участвуй в розыгрыше</p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">ВЫполняй</h4>
                        <p className="popupAction__contentStepText">задания и получай призы</p>
                    </div>
                </div>
                <div className="popupAction__contentButton">
                    <Button
                        className="_magnitColor"
                        onClick={() => {
                            window.open(
                                'https://2814495.redirect.appmetrica.yandex.com/raffles-v3/raffle/multon_tour_2026?source=banner&appmetrica_tracking_id=1110736816761228937&referrer=reattribution%3D1&Нац_лендинг',
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
                                концерты любимых <br />
                                артистов
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
                            <p className="popupAction__prizeTitle">Стильный мерч</p>
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
                            <p className="popupAction__prizeTitle">модные гаджеты</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popupAction__magnit">
                <img
                    src={require('@media/popups/mag-logo-2.svg').default}
                    alt=""
                    className="popupAction__magnitLogo"
                />
                <img
                    src={require('@media/popups/mag-disc.png')}
                    alt=""
                    className="popupAction__magnitDisclaimer"
                />
            </div>
            <p className="popupAction__disclaimer">
                *Мобильное приложение «Магнит: акции и доставка» (6+) (далее – Мобильное
                приложение). ** За каждую покупку начисляется 1 шанс, который необходимо
                распределить среди участвующих призов (кроме главного). Общий срок акции с
                10.06.2026 по 30.09.2026. Период совершения покупок с картой Магнит Плюс в Магнит у
                дома, Магнит Семейный, Магнит Экстра, Магнит Опт, а также в мобильном приложении
                «Магнит: акции и доставка» (6+) в разделе «Доставка» с 10.06.2026 по 01.09.2026.
                Количество акционных товаров и призов ограничено. Призы могут отличаться по внешнему
                виду от изображений в рекламном материале. Имеются иные ограничения. С полной
                информацией об организаторе акции, о полных правилах её проведения, количестве
                призов, сроках, месте и порядке их получения можно ознакомиться в мобильном
                приложении. 1 бонус = 1 рубль. АО «Тандер», г. Краснодар, ул. им. Леваневского, д.
                185, ОГРН 1022301598549
            </p>
        </div>
    );
};

export default renderContent;
