import React from 'react';

import Default from '@components/default/Default.tsx';
import Icon from '@components/icon/Icon.tsx';
import StringService from '@services/string/String.service.ts';

import init from './methods/init.ts';
import sliderInit from './methods/sliderInit.ts';

import ChequeBlockI from './types.ts';

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

class ChequeBlock
    extends Default<ChequeBlockI['props'], ChequeBlockI['state']>
    implements ChequeBlockI
{
    parent: ChequeBlockI['parent'];

    constructor(props: ChequeBlockI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    sliderInit = sliderInit;

    render() {
        const { mode } = this.props;

        return (
            <div ref={this.parent} className={this.getClass('fivekaPrizes__chequesBlock _FULL')}>
                {mode === 'desktop' && (
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
                )}
                {mode === 'mobile' && (
                    <div className="fivekaPrizes__chequesSlider">
                        {(['prev', 'next'] as const).map((k) => (
                            <div
                                className={this.getClass(
                                    'fivekaPrizes__chequesSliderButton',
                                    this.setClass(k),
                                )}
                                key={k}
                            >
                                <Icon name={k === 'prev' ? 'arrow-prev-long' : 'arrow-next-long'} />
                            </div>
                        ))}
                        <div className="fivekaPrizes__chequesSliderInner">
                            <div className="fivekaPrizes__chequesSliderItems">
                                {items.map((item, i) => (
                                    <div className="fivekaPrizes__chequesSliderItem" key={i}>
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
                                            <p className="fivekaPrizes__chequeTitle">
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ChequeBlock;
