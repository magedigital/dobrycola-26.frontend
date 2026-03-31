import React from 'react';

import I from '../types.ts';

const renderPrizes: I['renderPrizes'] = function () {
    const { prizes, resultPrize } = this.state;

    if (!prizes) {
        return;
    }

    return (
        <div className="popup__rafflePrizes">
            {prizes.map((p, i) => (
                <div
                    className={this.getClass(
                        'popup__rafflePrizesItem _COL _COL_CENTER',
                        this.setClass(i + 1),
                    )}
                    key={i}
                >
                    <img src={p.thumb} alt="" className="popup__rafflePrizesItemThumb" />
                </div>
            ))}
            {resultPrize && (
                <div className="popup__rafflePrizesItem _result">
                    <img src={resultPrize.image} alt="" className="popup__rafflePrizesItemThumb" />
                    <p className="popup__rafflePrizesItemName">{resultPrize.name}</p>
                </div>
            )}
        </div>
    );
};

export default renderPrizes;
