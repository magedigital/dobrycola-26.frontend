import React from 'react';

import Link from '@components/link/Link.tsx';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="winners__head _COL">
            <h3 className="winners__headTitle _TITLE _inner">ПОБЕДИТЕЛИ РОЗЫГРЫШЕЙ</h3>
            <p className="winners__headInfo">
                Подробную информацию смотрите <br className='_MOBILE' />в{' '}
                <Link className="winners__headInfoLink" pageName="profile">
                    Личном кабинете
                </Link>
            </p>
        </div>
    );
};

export default renderHead;
