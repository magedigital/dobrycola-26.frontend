import React from 'react';

import Checkbox from '@components/checkbox/Checkbox.tsx';
import Icon from '@components/icon/Icon.tsx';

import I from '../types.ts';

const renderSlider: I['renderSlider'] = function () {
    const { content, isConfirm, items = [] } = this.state;

    return (
        <div className="popup__merch _FULL_W _COL _COL_H_CENTER">
            {(['prev', 'next'] as const).map((key) => (
                <div className={`popup__merchButton _CLICK _COL _COL_CENTER _${key}`} key={key}>
                    <i className="popup__merchButtonIcon">
                        <Icon name={key === 'prev' ? 'arrow-prev-long' : 'arrow-next-long'} />
                    </i>
                </div>
            ))}

            <div className="popup__merchInner _FULL_W">
                <div className="popup__merchItems">
                    {content!.components.buy.merch.prizes.map((merch, key) => (
                        <div
                            className="popup__merchItemsItem popup__merchItem _COL _COL_H_CENTER"
                            key={key}
                        >
                            <div className="popup__merchItemInner"></div>
                        </div>
                    ))}
                </div>

                <div className="popup__merchReactItems">
                    {items.map((merch, key) => (
                        <div className="popup__merchItem _COL _COL_H_CENTER" key={key}>
                            <div className="popup__merchItemInner">
                                <div className="popup__orderCard">
                                    <div className="popup__orderCardHead">
                                        <img
                                            src={merch.thumb}
                                            alt=""
                                            className="popup__orderCardImage"
                                        />
                                    </div>
                                    <p className="popup__orderCardName">{merch.title}</p>
                                    <div className="popup__orderCardPrice">{merch.price}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="popup__merchCheckbox">
                <Checkbox
                    className=""
                    value={!!isConfirm}
                    onChange={async () => {
                        await this.asyncSetState({ isConfirm: !isConfirm });
                    }}
                >
                    Подтверждаю заказ
                </Checkbox>
            </div>
        </div>
    );
};

export default renderSlider;
