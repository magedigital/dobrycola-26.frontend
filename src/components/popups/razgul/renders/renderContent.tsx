import React from 'react';

import Button from '@components/button/Button.tsx';
import Media from '@components/media/Media.tsx';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

const renderLogos = () => (
    <div className="popupAction__razgulLogos">
        <img
            src={require('@media/popups/logo-pp-razgul-1.png')}
            alt=""
            className="popupAction__razgulLogo"
        />
        <img
            src={require('@media/popups/logo-pp-razgul-2.png')}
            alt=""
            className="popupAction__razgulLogo"
        />
        <img
            src={require('@media/popups/logo-pp-razgul-3.png')}
            alt=""
            className="popupAction__razgulLogo"
        />
    </div>
);

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popupAction _razgul _COL">
            <Media check={(d) => d === 'desktop'}>{renderLogos()}</Media>
            <p className="popupAction__support">Акция Добрый в «разгуляйка»</p>
            <h3 className="popupAction__title">поймай звук лета</h3>
            <div className="popupAction__content _COL">
                <p className="popupAction__contentSupport">С 01 по 29 июня 2026 года:</p>
                <div className="popupAction__contentSteps">
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">покупай</h4>
                        <p className="popupAction__contentStepText">
                            напитки Добрый® и/или BURN® <br className="_MOBILE" />
                            от 1 шт.
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">регистрируй</h4>
                        <p className="popupAction__contentStepText">код с чека на сайте</p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">Участвуй</h4>
                        <p className="popupAction__contentStepText">
                            в розыгрыше еженедельных призов и&nbsp;главного приза
                        </p>
                    </div>
                </div>
                <div className="popupAction__contentButton">
                    <Button
                        className="_boldBorder _darkBlueColor"
                        onClick={() => {
                            window.open('https://русский-разгуляйка.рф/giveaway/31', '_blank');
                            sendGoal('mapPopupRazgulToBtn');
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
                                    src={require('@media/popups/prizes-pp-razgul-1.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                Стильный <br className="_DESKTOP" />
                                мерч
                            </p>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-razgul-2.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                крутые <br className="_DESKTOP" />
                                гаджеты
                            </p>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-razgul-3.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                сертификат <br className="_DESKTOP" />
                                «разгуляйка»
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Media check={(d) => d === 'mobile'}>{renderLogos()}</Media>
            <div className="popupAction__razgul">
                <img
                    src={require('@media/popups/razgul-disc.png')}
                    alt=""
                    className="popupAction__razgulDisclaimer"
                />
                <p className="popupAction__disclaimer">
                    *PRO-ПРО. Общий срок акции: с 01.06.2026 по 31.08.2026, включая срок выдачи
                    призов. Период совершения покупок в магазинах сети «Русский Разгуляйка» и
                    регистрации чеков — с 01.06.2026 по 29.06.2026. Информацию об организации акции,
                    условиях её проведения, количестве, сроках, месте получения, перечень товаров,
                    участвующих в акции, смотрите в правилах акции, размещенных на
                    https://русский-разгуляйка.рф/giveaway/31. Внешний вид продукции и призов может
                    отличаться от изображений на рекламных материалах.
                </p>
            </div>
        </div>
    );
};

export default renderContent;
