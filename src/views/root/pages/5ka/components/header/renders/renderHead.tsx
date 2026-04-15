import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import Link from '@components/link/Link.tsx';
import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="fivekaHeader__head _COL">
            <Media check={(d) => d === 'mobile'}>
                <Link className="fivekaHeader__headBack" pageName="index">
                    <Icon name="5ka-back-arrow" />
                    на главную
                </Link>
            </Media>
            <p className="fivekaHeader__headSubtitle">Акция только в «ПятёрочкЕ»</p>
            <h1 className="fivekaHeader__headTitle">
                Включай хип-хоп
                <br />и выигрывай
            </h1>
        </div>
    );
};

export default renderHead;
