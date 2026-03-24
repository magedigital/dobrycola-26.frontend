import React from 'react';

import I from '../types.ts';

const renderSlider: I['renderSlider'] = function () {
    const items = this.getSliderItems();

    return (
        <div className="indexHeader__slider">
            <div className="indexHeader__sliderInner">
                <div className="indexHeader__sliderItems">
                    {items.map((i) => (
                        <div className="indexHeader__sliderItem" key={i.thumb}>
                            <div className="indexHeader__sliderItemInner">
                                <img
                                    src={i.thumb}
                                    alt=""
                                    className="indexHeader__sliderItemThumb"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default renderSlider;
