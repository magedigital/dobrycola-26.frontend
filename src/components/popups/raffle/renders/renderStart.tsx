import React from 'react';

import Icon from '@components/icon/Icon.tsx';

import I from '../types.ts';

const renderStart: I['renderStart'] = function () {
    const { prizes } = this.state;

    if (!prizes) {
        return;
    }

    return (
        <div className="popup__raffleStart">
            <p className="popup__raffleStartTitle">Призы, которые можно выиграть</p>
            <div className="popup__raffleStartSlider">
                <div className="popup__raffleStartSliderItems">
                    {prizes.map((p, i) => (
                        <div className="popup__raffleStartSliderItem _COL _COL_CENTER" key={i}>
                            <div className="popup__raffleStartSliderItemHead">
                                <img
                                    src={p.thumb}
                                    alt=""
                                    className="popup__raffleStartSliderItemImage"
                                />
                            </div>
                            <p className="popup__raffleStartSliderItemName">{p.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            {(['prev', 'next'] as const).map((key) => (
                <div
                    className={`popup__raffleStartButton _CLICK _COL _COL_CENTER _${key}`}
                    key={key}
                >
                    <Icon name={key === 'prev' ? 'arrow-prev-long' : 'arrow-next-long'} />
                </div>
            ))}
        </div>
    );
};

export default renderStart;
