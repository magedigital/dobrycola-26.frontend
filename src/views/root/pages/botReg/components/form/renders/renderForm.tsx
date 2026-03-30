import React from 'react';

import Field from '@components/field/Field.tsx';

import I from '../types.ts';

const renderForm: I['renderForm'] = function () {
    const { form } = this.state;

    if (!form) {
        return;
    }

    return (
        <div className="popup__height _COL _COL_V_CENTER">
            <div className="popup__form _FULL_W">
                <div className="popup__formField _FULL_W">
                    <Field
                        className="_center"
                        type="input"
                        support="Адрес электронной почты <br/>(логин на сайте)"
                        name="login"
                        value={form?.login || ''}
                        setValue={async ({ value }) => {
                            await this.setValue({ data: { login: value }, targetName: 'form' });
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default renderForm;
