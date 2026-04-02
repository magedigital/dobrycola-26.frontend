import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import sendGoal from '@utils/sendGoal.ts';

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
                        } else if (i.type === 'href') {
                            window.open(i.href!, '_blank');
                        } else if (i.type === 'ancor') {
                            AppRouter.changePage({
                                pageName: i.pageName!,
                                search: [{ name: 'ancor', value: i.ancor! }],
                            });
                        }

                        if (i.goal) {
                            sendGoal(i.goal);
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
