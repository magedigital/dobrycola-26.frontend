import React from 'react';

import StringService from '@services/string/String.service.ts';

import I from '../types.ts';

const items = [
    {
        thumb: require('@media/5ka/check-prize-5ka-01.png'),
        count: 20,
        title: 'Наушники со стикерами',
    },
    {
        thumb: require('@media/5ka/check-prize-5ka-02.png'),
        count: 10,
        title: 'Держатель для телефона с обвесом',
    },
    {
        thumb: require('@media/5ka/check-prize-5ka-03.png'),
        count: 10,
        title: 'Шнурки и пин для кроссовок',
    },
    {
        thumb: require('@media/5ka/check-prize-5ka-04.png'),
        count: 6,
        title: 'Носки',
    },
    {
        thumb: require('@media/5ka/check-prize-5ka-05.png'),
        count: 5,
        title: '500 баллов Яндекс.Плюс',
    },
    {
        thumb: require('@media/5ka/check-prize-5ka-06.png'),
        count: 10,
        title: 'Подписка VK музыка 3 мес',
    },
];

const renderCheques: I['renderCheques'] = function () {
    return (
        <div className="fivekaPrizes__cheques">
            <h3 className="fivekaPrizes__chequesTitle _TITLE">
                Обменивай чеки с Добрый® или Burn® на призы
            </h3>
            <div className="fivekaPrizes__chequesContent">
                <div className="fivekaPrizes__chequesItems">
                    {items.map((item, i) => (
                        <div className="fivekaPrizes__chequesItem" key={i}>
                            <div className="fivekaPrizes__cheque">
                                <div className="fivekaPrizes__chequeHead">
                                    <img
                                        src={item.thumb}
                                        alt=""
                                        className="fivekaPrizes__chequeThumb"
                                    />
                                    <div className="fivekaPrizes__chequeCount">
                                        {item.count}{' '}
                                        {new StringService().getEndText(item.count, [
                                            'чек',
                                            'чека',
                                            'чеков',
                                        ])}
                                    </div>
                                </div>
                                <p className="fivekaPrizes__chequeTitle">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default renderCheques;
