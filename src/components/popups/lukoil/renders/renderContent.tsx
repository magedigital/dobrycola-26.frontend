import React from 'react';

import Button from '@components/button/Button.tsx';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popupAction _lukoil _COL">
            <p className="popupAction__support">Акция Добрый в «ЛУКОЙЛ»</p>
            <h3 className="popupAction__title">
                участвуй в фестивале призов <br />и выигрывай
            </h3>
            <div className="popupAction__content _COL">
                <p className="popupAction__contentSupport">С 01 июня по 31 июля июня 2026 года:</p>
                <div className="popupAction__contentSteps">
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Покупай</h4>
                        <p className="popupAction__contentStepText">
                            от 2-х любых газированных напитков Добрый® в&nbsp;одном чеке
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">применяй</h4>
                        <p className="popupAction__contentStepText">карту лояльности</p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Участвуй</h4>
                        <p className="popupAction__contentStepText">в розыгрыше призов!</p>
                    </div>
                </div>
                <div className="popupAction__contentButton">
                    <Button
                        className="_boldBorder _greenColor"
                        onClick={() => {
                            window.open(
                                'https://redirect.appmetrica.yandex.com/serve/1182784531787242932',
                                '_blank',
                            );
                            sendGoal('mapPopupLukoilToBtn');
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
                                    src={require('@media/popups/prizes-pp-lukoil-1.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">поездка на фестиваль</p>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-lukoil-2.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">сертификат яндекс.афиша</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popupAction__disclaimer">
                Период совершения акционных покупок: 01.06.2026 – 31.07.2026. Период определения
                кандидатов акции 01.06.2026 – 31.08.2026. Акция проводится для участников программы
                лояльности «Заправься выгодой». Акционная покупка – покупка выделенного перечня
                газированных безалкогольных напитков «Добрый» в ассортименте в количестве от 2 штук
                в одном чеке с использованием карты программы лояльности «Заправься выгодой» в
                период совершения акционных покупок в акционных торговых точках. Предложение
                ограничено наличием акционного товара в акционной торговой точке. Подробности об
                организаторе акции, операторе, правилах ее проведения, условиях получения призов,
                сроках проведения – на Интернет-представительстве программы: auto.lukoil.ru и/или в
                мобильном приложении «АЗС ЛУКОЙЛ». «Добрый» является зарегистрированным товарным
                знаком © ООО «Мултон Партнерс» 2026.
            </div>
        </div>
    );
};

export default renderContent;
