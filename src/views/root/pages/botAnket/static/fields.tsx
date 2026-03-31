import React from 'react';

export const botAnketFields = {
    firstName: {
        type: 'input',
        support: 'Имя*',
    },
    lastName: {
        type: 'input',
        support: 'Фамилия*',
    },
    // id: {
    //     type: 'input',
    //     support: 'ID пригласившего участника (если есть)',
    // },
    phone: {
        type: 'input',
        support: 'Номер мобильного телефона*',
        input: {
            reg: 'phone',
        },
    },
    agreement: {
        type: 'checkbox',
        checkbox: {
            content: (
                <>
                    Я соглашаюсь с{' '}
                    <a href="/upload/docs/politics.pdf" target="_blank">
                        политикой конфиденциальности
                    </a>
                </>
            ),
        },
    },
    personal: {
        type: 'checkbox',
        checkbox: {
            content: (
                <>
                    Я соглашаюсь с{' '}
                    <a href="/upload/docs/agreement-feedback.pdf" target="_blank">
                        условиями обработки персональных данных
                    </a>
                </>
            ),
        },
    },
    mailing: {
        type: 'checkbox',
        checkbox: {
            content: <>Я соглашаюсь получать рассылку с новостями акции</>,
        },
    },
} as const;
