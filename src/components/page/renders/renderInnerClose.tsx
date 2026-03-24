import React from 'react';

import Icon from '@components/icon/Icon.tsx';

import I from '../types.ts';

const renderInnerClose: I['renderInnerClose'] = function () {
    const { isCloseMove } = this.state;

    return (
        <div
            className={this.getClass('page__close _CLICK', isCloseMove && '_move')}
            onClick={this.close.bind(this)}
        >
            <Icon name="popup-close" />
        </div>
    );
};

export default renderInnerClose;
