import React from 'react';

import I from '../types.ts';

const renderDecors: I['renderDecors'] = function () {
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((k) => (
                <div className={this.getClass('popup__raffleDecor', this.setClass(k))} key={k}>
                    <img
                        src={require(`@media/raffle/decor-${k}.png`)}
                        alt=""
                        className="popup__raffleDecorThumb"
                    />
                </div>
            ))}
        </>
    );
};

export default renderDecors;
