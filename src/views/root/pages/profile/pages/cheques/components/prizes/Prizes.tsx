import React from 'react';

import Button from '@components/button/Button.tsx';
import Default from '@components/default/Default.tsx';
import Icon from '@components/icon/Icon.tsx';

import init from './methods/init.ts';
import sliderInit from './methods/sliderInit.ts';

import PrizesI from './types.ts';

class Prizes extends Default<PrizesI['props'], PrizesI['state']> implements PrizesI {
    parent: PrizesI['parent'];

    constructor(props: PrizesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;
    sliderInit = sliderInit;

    render() {
        const { items } = this.props;

        return (
            <div ref={this.parent} className="profilePrizes _FULL_W">
                <div className="profilePrizes__slider">
                    {(['prev', 'next'] as const).map((key) => (
                        <div
                            className={`profilePrizes__sliderButton _CLICK _COL _COL_CENTER _${key}`}
                            key={key}
                        >
                            <Icon name={key === 'prev' ? 'arrow-prev-long' : 'arrow-next-long'} />
                        </div>
                    ))}
                    <div className="profilePrizes__sliderItems">
                        {items.map((item, k) => (
                            <div className="profilePrizes__sliderItem" key={k}>
                                <div className="profilePrizes__prize" data-id={item.code}>
                                    <div className="profilePrizes__prizeHead">
                                        <img
                                            src={item.thumb}
                                            alt=""
                                            className="profilePrizes__prizeThumb"
                                        />
                                        <p className="profilePrizes__prizePrice">{item.price}</p>
                                    </div>
                                    <p className="profilePrizes__prizeTitle">{item.title}</p>
                                    <div className="profilePrizes__prizeButton">
                                        <Button className="_darkPinkColor _boldBorder">
                                            заказать
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Prizes;
