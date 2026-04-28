import React from 'react';

import { FieldT } from '@components/field/types.ts';

import I from '../types.ts';

const getFields: I['getFields'] = function () {
    const { authUser } = this.props;
    const fields: Record<string, FieldT> = {};
    const withPassport = authUser.extraDataRequired
        ? Object.keys(authUser.extraDataRequired).find(
              (k) => authUser.extraDataRequired![k].type === 'phone',
          )
        : false;

    if (authUser.extraDataRequired) {
        Object.keys(authUser.extraDataRequired).forEach((name) => {
            const field = authUser.extraDataRequired![name];
            let reg;
            let regExp;
            let type: FieldT['type'] | undefined;
            let isAddress: boolean | undefined;

            if (field.type === 'photo') {
                type = 'file';
            } else if (name === 'deliveryAddress') {
                type = 'address';
            } else {
                type = 'input';
            }

            if (field.type === 'phone') {
                reg = 'phone' as const;
            } else if (field.type === 'date') {
                reg = 'date' as const;
            } else if (name === 'passportSeriesNumber') {
                reg = 'passport' as const;
            }

            if (field.type === 'address') {
                isAddress = true;
            }

            if (name === 'inn') {
                regExp = /\D/gi;
            }

            if (type) {
                fields[name] = {
                    type,
                    support: field.title,
                    ...(type === 'input' ? { input: { reg, regExp, isAddress } } : {}),
                };
            }
        });
    }

    fields.agreement = {
        type: 'checkbox',
        checkbox: {
            content: (
                <>
                    Я соглашаюсь с{' '}
                    <a href="/upload/docs/politics.pdf" target="_blank">
                        политикой конфиденциальности
                    </a>{' '}
                    и{' '}
                    <a
                        href={
                            withPassport
                                ? '/upload/docs/agreement-full.pdf'
                                : '/upload/docs/agreement-address.pdf'
                        }
                        target="_blank"
                        rel="noreferrer"
                    >
                        условиями обработки персональных данных
                    </a>
                    *
                </>
            ),
        },
    };

    return fields;
};

export default getFields;
