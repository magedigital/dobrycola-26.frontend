import React from 'react';

import Button from '@components/button/Button';

import { ProfileOrderT } from '../../../../../views/root/pages/profile/types';
import ChequePopupI from '../../types';

type PropsT = {
    setStep: ChequePopupI['setStep'];
    close: () => void;
    prize: ProfileOrderT;
};

export default function Final({ setStep, close, prize }: PropsT): React.ReactNode {
    return (
        <>
            <div className="popup__head _COL _COL_H_CENTER">
                <div className="popup__title">заказ приза</div>
            </div>
            <div className="popup__final _FULL_W _COL _COL_H_CENTER _bottom">
                <div className="popup__finalTitle">приз заказан</div>
                <div className="popup__finalText">Списано {prize.price}</div>
            </div>
            <div className="popup__buttons _ROW">
                <div className="popup__button _fix">
                    <Button
                        onClick={() => {
                            setStep('start');
                        }}
                        className="_boldBorder _darkPinkColor"
                    >
                        заказать ещё
                    </Button>
                </div>
                <div className="popup__button _fix">
                    <Button
                        onClick={() => {
                            close();

                            // if (window.Telegram) {
                            //     window.Telegram.WebApp?.close();
                            // }
                        }}
                        className="_boldBorder _purpleColor"
                    >
                        Закрыть окно
                    </Button>
                </div>
            </div>
        </>
    );
}
