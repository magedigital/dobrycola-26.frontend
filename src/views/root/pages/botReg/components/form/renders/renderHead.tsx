import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="popup__head _COL _COL_H_CENTER">
            <div className="popup__title">Регистрация</div>

            <p className="popup__description">
                Если вы ещё не регистрировались на сайте или хотите подключить аккаунт сайта
            </p>
        </div>
    );
};

export default renderHead;
