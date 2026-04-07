import React from 'react';

import PrizesBlock from '../components/prizesBlock/PrizesBlock.tsx';

import I from '../types.ts';

const renderPrizes: I['renderPrizes'] = function () {
    return (
        <div className="fivekaPrizes__prizes">
            <h3 className="fivekaPrizes__prizesTitle _TITLE _mediumSize">ЕЖЕНЕДЕЛЬНЫЕ ПРИЗЫ</h3>
            <div className="fivekaPrizes__prizesBlocks">
                <div className="fivekaPrizes__prizesBlock">
                    <PrizesBlock
                        name="legend"
                        title="Легенды"
                        prizes={[
                            {
                                thumb: require('@media/5ka/weekly-prize-5ka-01.png'),
                                title: 'Кастомные футболки',
                            },
                            {
                                thumb: require('@media/5ka/weekly-prize-5ka-02.png'),
                                title: 'Сертификаты траектория 3000 руб.',
                            },
                            {
                                thumb: require('@media/5ka/weekly-prize-5ka-03.png'),
                                title: 'Приставки Nintendo',
                            },
                        ]}
                    />
                </div>
                <div className="fivekaPrizes__prizesBlock">
                    <PrizesBlock
                        name="school"
                        title="Новая школа"
                        prizes={[
                            {
                                thumb: require('@media/5ka/weekly-prize-5ka-04.png'),
                                title: 'Кастомные футболки',
                            },
                            {
                                thumb: require('@media/5ka/weekly-prize-5ka-06.png'),
                                title: 'Сертификаты Sneakerhead 5000 руб.',
                            },
                            {
                                thumb: require('@media/5ka/weekly-prize-5ka-05.png'),
                                title: 'Умные кольца SBER',
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default renderPrizes;
