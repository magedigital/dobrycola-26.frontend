import React from 'react';

import Icon from '@components/icon/Icon.tsx';

import I from '../types.ts';

const renderTop: I['renderTop'] = function () {
    const { setState } = this.props;

    return (
        <div className="menu__top">
            <Icon
                className="menu__topBtn _CLICK"
                name="menu-close"
                onClick={setState.bind(null, false)}
            />
            <Icon className="menu__topLogo" name="logo" />
        </div>
    );
};

export default renderTop;
