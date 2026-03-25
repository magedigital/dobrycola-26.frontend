import React from 'react';

import Button from '@components/button/Button';
import DashedBorder from '@components/dashedBorder/DashedBorder';

import ChequePopupI from '../../types';

type PropsT = {
    setStep: ChequePopupI['setStep'];
    uploadQRCode: ChequePopupI['uploadQRCode'];
};

export default function ScanError({ uploadQRCode, setStep }: PropsT): React.ReactNode {
    return (
        <>
            <div className="popup__head _COL _COL_H_CENTER">
                <div className="popup__title">Регистрация чека</div>
            </div>
            <div className="popup__scanError _FULL_W _COL _COL_H_CENTER">
                <div className="popup__scanErrorBorder">
                    <DashedBorder />
                </div>
                <p className="popup__scanErrorText">Ошибка</p>
                <div className="popup__scanErrorButton">
                    <Button
                        onClick={() => {
                            setStep('scan');
                        }}
                        className="_lightPurpleColor _mediumSize"
                    >
                        Попробовать другой чек
                    </Button>
                </div>
            </div>
            <div className="popup__buttons _ROW">
                <div className="popup__button _autoHeight">
                    <Button
                        onClick={() => {
                            setStep('form', 'typing');
                        }}
                        className="_boldBorder _darkPinkColor"
                    >
                        Ввести данные <br className="_DESKTOP" />
                        вручную
                    </Button>
                </div>
                <div className="popup__button _autoHeight">
                    <Button isLabel={true} className="_boldBorder _purpleColor">
                        <input
                            type="file"
                            accept="jpg,jpeg,png"
                            onChange={uploadQRCode}
                            style={{ display: 'none' }}
                        />
                        Загрузить фото
                        <br className="_DESKTOP" /> QR-кода
                    </Button>
                </div>
            </div>
        </>
    );
}
