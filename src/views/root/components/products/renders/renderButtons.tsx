import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderButtons: I['renderButtons'] = function () {
    return (
        <Media check={(d) => d === 'desktop'}>
            {(['prev', 'next'] as const).map((key) => (
                <div
                    className={`products__sliderButton _CLICK _COL _COL_CENTER _${key}`}
                    key={key}
                    onClick={() => {
                        if (this.slider) {
                            this.slider.buttonHandler({ dir: key });
                        }
                    }}
                >
                    <i className="products__sliderButtonIcon">
                        <Icon name={key === 'prev' ? 'arrow-prev-long' : 'arrow-next-long'} />
                    </i>
                </div>
            ))}
        </Media>
    );
};

export default renderButtons;
