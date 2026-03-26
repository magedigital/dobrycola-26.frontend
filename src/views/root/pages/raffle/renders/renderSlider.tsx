import React from 'react';

import I from '../types.ts';

const fakePrize = {
    thumb: '',
    title: '',
};

const renderSlider: I['renderSlider'] = function () {
    // const { curIndex, prize, items = [] } = this.state;
     const {
        curIndex = 10,
        prize = {
            id: this.gameId,
            image: 'https://dev.2025-summer.dobrycola-promo.srv08.ru/upload/iblock/7d3/jvf3jb2rh6umefpyny3rak7alpzq6wn4.png',
            name: 'Prize',
            date: new Date().getTime(),
            index: curIndex,
        },
        items = [],
    } = this.state;

    return (
        <div className={`raffle__slider ${items.length ? '_ready' : ''}`}>
            <div className="raffle__sliderInner">
                <div className="raffle__sliderItems">
                    {new Array(30).fill({}).map((item, i) => {
                        const index = i % items.length;
                        const isOdd = i % 2 === 1;
                        const isResult = i === curIndex && prize;
                        const thisPrize =
                            (isResult ? { thumb: prize.image, title: prize.name } : items[index]) ||
                            fakePrize;

                        return (
                            <div
                                className={`raffle__sliderItem _COL _COL_H_CENTER ${isOdd ? '_odd' : ''}`}
                                key={i}
                            >
                                {isResult && this.renderFires()}
                                <div className="raffle__sliderItemHead">
                                    <img
                                        src={thisPrize.thumb}
                                        alt=""
                                        className="raffle__sliderItemImage"
                                    />
                                </div>
                                <p
                                    className="raffle__sliderItemName"
                                    dangerouslySetInnerHTML={{ __html: thisPrize.title }}
                                ></p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default renderSlider;
