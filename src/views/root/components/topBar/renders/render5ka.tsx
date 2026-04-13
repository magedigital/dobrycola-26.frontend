import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import Link from '@components/link/Link.tsx';
import Media from '@components/media/Media.tsx';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';

const render5ka: I['render5ka'] = function () {
    const { mode } = this.props;

    if (mode !== '5ka') {
        return;
    }

    return (
        <Media check={(d) => d === 'desktop'}>
            <div className="topBar__5ka">
                <Link
                    className="topBar__5kaBack"
                    pageName="index"
                    callback={() => {
                        sendGoal('5kaHeaderMain');
                    }}
                >
                    <Icon name="5ka-back-arrow" />
                    на главную
                </Link>
                <div className="topBar__5kaButton">
                    <div
                        className="topBar__action _faq _ROW _ROW_CENTER _CLICK"
                        onClick={() => {
                            AppRouter.changePage({ pageName: 'faq5ka' });
                            sendGoal('5kaHeaderFaq');
                        }}
                    >
                        Вопрос-ответ
                    </div>
                </div>
            </div>
        </Media>
    );
};

export default render5ka;
