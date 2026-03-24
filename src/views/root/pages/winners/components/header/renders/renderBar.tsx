import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import Input from '@components/input/Input.tsx';
import Select from '@components/select/Select.tsx';

import I from '../types.ts';

const renderBar: I['renderBar'] = function () {
    const { searchWeek, searchPhone, winnersData } = this.state;

    return (
        <div className="winners__bar">
            <div className="winners__barBlock">
                <div className="winners__barBlockField">
                    <Select
                        className="_subMode"
                        list={(winnersData?.raffles || []).map((item) => ({
                            id: item.id,
                            title: [item.from.slice(0, 5), item.to.slice(0, 5)].join(' - '),
                        }))}
                        value={searchWeek}
                        onChange={async ({ value }) => {
                            await this.setWeek(value);
                        }}
                    />
                </div>
                <p className="winners__barBlockSupport">
                    Выберите неделю, чтобы <br className="_DESKTOP" />
                    посмотреть победителей
                </p>
            </div>
            <div className="winners__barBlock">
                <div className="winners__barBlockField">
                    <div className="winners__barBlockSearch">
                        <Icon name="search" />
                        <Input
                            className="_subMode"
                            value={searchPhone || ''}
                            onChange={async ({ value }) => {
                                await this.setPhone(value);
                            }}
                            support="Поиск по номеру телефона"
                        />
                    </div>
                </div>
                <p className="winners__barBlockSupport">
                    Введите последние <br className="_DESKTOP" />
                    4&nbsp;цифры
                </p>
            </div>
        </div>
    );
};

export default renderBar;
