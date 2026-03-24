import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderButtons: I['renderButtons'] = function () {
    return (
        <Media check={(d) => d === 'desktop'}>
            {(['prev', 'next'] as const).map((key) => (
                <div className={`products__sliderButton _CLICK _COL _COL_CENTER _${key}`} key={key}>
                    <i className="products__sliderButtonIcon">
                        <Icon name={key === 'prev' ? 'arrow-prev-short' : 'arrow-next-short'} />
                    </i>
                </div>
            ))}
        </Media>
    );
};

export default renderButtons;
