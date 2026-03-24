import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderMobButtons: I['renderMobButtons'] = function () {
    const { current } = this.state;

    return (
        <Media check={(d) => d === 'mobile'}>
            <div className="products__sliderMobButtons _FULL_W _ROW _ROW_CENTER">
                {(['prev', null, 'next'] as const).map((key) => {
                    if (key === null) {
                        return (
                            <div className="products__sliderMobItems" key={key}>
                                {current + 1} / {this.props.products.length}
                            </div>
                        );
                    }

                    return (
                        <div
                            className={`products__sliderMobButton _CLICK _COL _COL_CENTER _${key}`}
                            key={key}
                            onClick={() => {
                                if (this.slider) {
                                    this.slider.buttonHandler({ dir: key });
                                }
                            }}
                        >
                            <Icon name={key === 'prev' ? 'arrow-prev-long' : 'arrow-next-long'} />
                        </div>
                    );
                })}
            </div>
        </Media>
    );
};

export default renderMobButtons;
