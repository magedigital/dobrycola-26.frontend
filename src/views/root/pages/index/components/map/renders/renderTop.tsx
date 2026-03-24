import React from 'react';

import Icon from '@components/icon/Icon.tsx';

import I from '../types.ts';

const renderTop: I['renderTop'] = function () {
    return (
        <div className="indexMap__top _CLICK" onClick={this.scrollToSection.bind(this, 'start')}>
            ТВОЙ OPEN-AIR
            <Icon name="map-arrow" />
        </div>
    );
};

export default renderTop;
