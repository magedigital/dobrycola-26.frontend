import React from 'react';

import StringService from '@services/string/String.service.ts';

import I from '../types.ts';

const renderOffer: I['renderOffer'] = function () {
    return (
        <div className="fivekaSteps__offer">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((k) => (
                <img
                    src={require(`@media/5ka/special-prize-5ka-element0${k}.png`)}
                    alt=""
                    className={this.getClass('fivekaSteps__offerDecor', this.setClass(k))}
                    key={k}
                />
            ))}
            <div className="fivekaSteps__offerPrice">
                <div className="fivekaSteps__offerPriceTitle"></div>
                <p className="fivekaSteps__offerPriceSupport">рублей</p>
            </div>
            <div className="fivekaSteps__offerContent">
                <h3 className="fivekaSteps__offerTitle">ВЫИГРАЙ специальный ПРИЗ!</h3>
                <p
                    className="fivekaSteps__offerText"
                    dangerouslySetInnerHTML={{
                        __html: new StringService().setSpaces(
                            'Загрузи 10 чеков из «Пятёрочки» с продукцией Добрый® или BURN® и получи шанс выиграть суперприз 100 000 рублей.',
                        ),
                    }}
                ></p>
            </div>
        </div>
    );
};

export default renderOffer;
