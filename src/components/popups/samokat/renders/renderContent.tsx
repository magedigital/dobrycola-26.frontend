import React from 'react';

import Button from '@components/button/Button.tsx';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

const renderTrack = () => (
    <>
        <div className="popupAction__track">
            <div className="popupAction__trackPreview">
                <img
                    src={require('@media/popups/image-song-samokat.jpg')}
                    alt=""
                    className="popupAction__trackThumb"
                />
            </div>
            <p className="popupAction__trackTitle">
                Группа «Разреши мне влюбиться» уже задала ритм этого лета и&nbsp;создала совместно
                с&nbsp;Самокат{' '}
                <a
                    rel="noreferrer"
                    href="https://music.yandex.ru/album/42702587/track/152796602?ref_id=39B4F29F-C21B-4309-8A52-A5A322544E16&utm_medium=copy_link"
                    target="_blank"
                >
                    новый трек
                </a>
            </p>
        </div>
    </>
);

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popupAction _samokat _COL">
            <p className="popupAction__support">Акция Добрый в «самокат»</p>
            <h3 className="popupAction__title">Послушай как звучит твое лето с&nbsp;Самокат!</h3>
            <div className="popupAction__content _COL">
                <p className="popupAction__contentSupport">С 17 июня по 07 июля 2026 года:</p>
                <div className="popupAction__contentSteps">
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">закажи</h4>
                        <p className="popupAction__contentStepText">
                            от 5 товаров из подборки в приложении Самокат
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">получи</h4>
                        <p className="popupAction__contentStepText">
                            промокод на 150 руб. на следующую покупку напитков Добрый® в Самокат
                        </p>
                    </div>
                    <div className="popupAction__contentStep">
                        <h4 className="popupAction__contentStepTitle">участвуй</h4>
                        <p className="popupAction__contentStepText">
                            в розыгрыше новенького iPhone 17 Pro
                        </p>
                    </div>
                </div>
                <div className="popupAction__contentButton">
                    <Button
                        className="_boldBorder _orangeColor"
                        onClick={() => {
                            window.open(
                                'https://samokat.ru/promo/82f1b662-c7ac-4402-a951-c52e38b63ae9?adjust_referrer=adjust_reftag%3DcZbFOY0lomJvS&utm_campaign=apr23&utm_medium=partner_univ&utm_source=promoaction_marketing',
                                '_blank',
                            );
                            sendGoal('mapPopupSamokatToBtn');
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
                                    src={require('@media/popups/prizes-pp-samokat-1.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">
                                Гарантированный
                                <br />
                                промокод на 150 руб.
                                <br />
                                первым 10 000 <br className="_MOBILE" />
                                покупателей
                            </p>
                        </div>
                    </div>
                    <div className="popupAction__prizesItem">
                        <div className="popupAction__prize">
                            <div className="popupAction__prizeHead">
                                <img
                                    src={require('@media/popups/prizes-pp-samokat-2.png')}
                                    alt=""
                                    className="popupAction__prizeThumb"
                                />
                            </div>
                            <p className="popupAction__prizeTitle">iPhone 17 Pro</p>
                        </div>
                    </div>
                </div>
            </div>
            {renderTrack()}
            <div className="popupAction__disclaimer">
                Насладись этим летом на&nbsp;полную&nbsp;— слушай яркие новинки этого лета, покупай
                продукцию Добрый в&nbsp;Самокат и&nbsp;участвуй в&nbsp;розыгрыше желанных призов!
            </div>
        </div>
    );
};

export default renderContent;
