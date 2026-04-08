import React from 'react';

import Media from '@components/media/Media.tsx';

import ChequeBlock from '../components/chequeBlock/ChequeBlock.tsx';

import I from '../types.ts';

const renderCheques: I['renderCheques'] = function () {
    return (
        <div className="fivekaPrizes__cheques">
            <h3 className="fivekaPrizes__chequesTitle _TITLE">
                Обменивай чеки с&nbsp;Добрый® или Burn® на призы
            </h3>
            <div className="fivekaPrizes__chequesContent">
                <Media check={(d) => d === 'desktop'}>
                    <ChequeBlock mode="desktop" />
                </Media>
                <Media check={(d) => d === 'mobile'}>
                    <ChequeBlock mode="mobile" />
                </Media>
            </div>
        </div>
    );
};

export default renderCheques;
