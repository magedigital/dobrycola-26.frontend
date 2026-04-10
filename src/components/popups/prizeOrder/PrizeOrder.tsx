import React from 'react';

import Popup from '@components/popup/Popup.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import init from './methods/init.ts';
import setStep from './methods/setStep.ts';

import PrizeOrderPopupI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderStep from './renders/renderStep.tsx';

class PrizeOrderPopup
    extends Popup<PrizeOrderPopupI['props'], PrizeOrderPopupI['state']>
    implements PrizeOrderPopupI
{
    parent: PrizeOrderPopupI['parent'];

    constructor(props: PrizeOrderPopupI['props']) {
        super(props);
        this.state = {
            currentStep: 'start',
            isInit: false,
        };

        this.parent = React.createRef();
    }

    name = 'prizeOrderPopup' as const;

    init = init;

    setStep = setStep;

    renderStep = renderStep;
    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: this.renderContent.bind(this),
        });
    }
}

const mapStore = (s: StoreT) => ({
    prizeOrderPopup: s.prizeOrderPopup,
});

export default WithStore(PrizeOrderPopup, mapStore);
