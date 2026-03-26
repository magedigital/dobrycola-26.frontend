import React from 'react';

import Button from '@components/button/Button.tsx';
import Checkbox from '@components/checkbox/Checkbox.tsx';

import I from '../types.ts';

const renderStartForm: I['renderStartForm'] = function () {
    const { isConfirm, loadingKey } = this.state;

    return (
        <div className="raffle__startForm _COL">
            <div className="raffle__startFormCheckbox">
                <Checkbox
                    className="_whiteColor _mediumSize"
                    value={!!isConfirm}
                    onChange={async ({ value }) => {
                        await this.asyncSetState({ isConfirm: value });
                    }}
                >
                    Я соглашаюсь с{' '}
                    <a href="/docs/rules.pdf" target="_blank">
                        Правилами акции
                    </a>{' '}
                    <br className="_MOBILE" />
                    и&nbsp;
                    <a href="/docs/politics.pdf" target="_blank">
                        Политикой конфиденциальности
                    </a>
                </Checkbox>
            </div>
            <div className="raffle__startFormButton">
                <Button
                    onClick={this.start.bind(this)}
                    className="_whiteColor _boldBorder"
                    loading={loadingKey === 'start'}
                >
                    ВРащать
                </Button>
            </div>
        </div>
    );
};

export default renderStartForm;
