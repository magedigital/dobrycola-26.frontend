import React from 'react';

import Icon from '@components/icon/Icon.tsx';

import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';

const renderLogo: I['renderLogo'] = function () {
    const { setMenuState, mode } = this.props;

    return (
        <div className="topBar__logo">
            <Icon
                name="menu-open"
                className="topBar__logoBtn _CLICK"
                onClick={setMenuState.bind(null, true)}
            />
            {mode !== '5ka' && (
                <Icon
                    name="logo"
                    className="topBar__logoThumb _CLICK"
                    onClick={() => {
                        AppRouter.changePage({ pageName: 'index' });
                    }}
                />
            )}
        </div>
    );
};

export default renderLogo;
