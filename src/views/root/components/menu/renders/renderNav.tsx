import React from 'react';

import Icon from '@components/icon/Icon.tsx';

import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';

const renderNav: I['renderNav'] = function () {
    const { setState } = this.props;
    const nav = this.getNav();

    return (
        <div className="menu__nav">
            {nav.map((i) => (
                <div
                    className="menu__navItem _CLICK"
                    key={i.name}
                    onClick={() => {
                        if (i.type === 'link') {
                            AppRouter.changePage({ pageName: i.pageName! });
                        }

                        setState(false);
                    }}
                >
                    <Icon name="menu-item" />
                    {i.text}
                </div>
            ))}
        </div>
    );
};

export default renderNav;
