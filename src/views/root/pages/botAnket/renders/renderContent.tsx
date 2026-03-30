import React from 'react';

import Form from '@components/form/Form.tsx';

import I from '../types.ts';

import { botAnketFields } from '../static/fields.tsx';

const renderContent: I['renderContent'] = function () {
    return (
        <>
            <div className="popup__head _COL _COL_H_CENTER">
                <div className="popup__title">Регистрация</div>
                <p className="popup__description">
                    Для завершения регистрации, заполните данные ниже
                </p>
            </div>
            <div className="popup__form">
                <Form
                    fields={botAnketFields}
                    button={{
                        text: ' завершить регистрацию',
                        className: '_darkPinkColor _boldBorder',
                    }}
                    request={this.sendForm.bind(this)}
                    fieldClassName="_popupField"
                    requiredText="* обязательные поля"
                />
            </div>
        </>
    );
};

export default renderContent;
