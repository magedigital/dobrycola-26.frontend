import React from 'react';

import Button from '@components/button/Button.tsx';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { loadingKey } = this.state;
    const { isConfirm } = this.props;

    return (
        <div className="popup__foot _FULL_W _COL _COL_H_CENTER">
            <div className="popup__buttons _FULL_W _ROW _ROW_H_CENTER">
                <div className="popup__button _fix">
                    <Button
                        className="_purpleColor _boldBorder"
                        onClick={this.sendForm.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        {isConfirm ? 'Получить код' : 'Получить пароль'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default renderFoot;
