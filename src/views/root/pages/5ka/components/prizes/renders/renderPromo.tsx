import React from 'react';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import getLink from '@components/popups/invite/utils/getLink.ts';
import StringService from '@services/string/String.service.ts';
import { appStore } from '@store/store.tsx';
import copyInBuffer from '@utils/copyInBuffer.ts';

import { setError } from '../../../../../components/errors/utils/errorHandler.ts';

import I from '../types.ts';

const renderPromo: I['renderPromo'] = function () {
    return (
        <div className="fivekaPrizes__promo">
            <h3 className="fivekaPrizes__promoTitle _TITLE">
                Выиграйте смартфоны для&nbsp;тебя и друга
            </h3>
            <div className="fivekaPrizes__promoContent _COL">
                <div className="fivekaPrizes__promoDecors">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((k) => (
                        <img
                            src={require(`@media/5ka/invite-decor-${k}.png`)}
                            alt=""
                            className={this.getClass('fivekaPrizes__promoDecor', this.setClass(k))}
                            key={k}
                        />
                    ))}
                </div>
                <div className="fivekaPrizes__promoInfo _COL">
                    <h4 className="fivekaPrizes__promoInfoTitle">ПРИГЛАШАЙ ДРУЗЕЙ В&nbsp;ПРОМО</h4>
                    <p className="fivekaPrizes__promoInfoSubTitle">
                        Выиграйте смартфоны для тебя и друга
                    </p>
                    <p
                        className="fivekaPrizes__promoInfoText"
                        dangerouslySetInnerHTML={{
                            __html: new StringService().setSpaces(
                                'Копируй свою уникальную ссылку и делись ей с друзьями. После того, как друг зарегистрирует свой первый чек, <b>вы оба попадёте в розыгрыш смартфона</b>. Больше приглашенных друзей - больше шансов выиграть приз. Не упусти возможность!',
                            ),
                        }}
                    ></p>
                    <div className="fivekaPrizes__promoInfoButton">
                        <Button
                            className="_purpleColor _boldBorder"
                            onClick={async () => {
                                // sendGoal('5kaInviteFriends');

                                if (!appStore.getState().authUser) {
                                    appStore.getState().setPopup({ name: 'loginPopup' });
                                } else {
                                    await copyInBuffer(getLink());

                                    setError({
                                        type: 'success',
                                        text: 'Ссылка успешно скопирована',
                                    });
                                }
                            }}
                        >
                            <Icon name="attachment" className="_attachment" />
                            скопировать ссылку
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderPromo;
