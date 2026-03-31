import React from 'react';

import Popup from '@components/popup/Popup.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import getGame from './methods/getGame.ts';
import init from './methods/init.ts';
import send from './methods/send.ts';
import sliderInit from './methods/sliderInit.ts';
import startRaffle from './methods/startRaffle.ts';
import startTrying from './methods/startTrying.ts';

import RaffleI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderDecors from './renders/renderDecor.tsx';
import renderHead from './renders/renderHead.tsx';
import renderPrizes from './renders/renderPrizes.tsx';
import renderRaffle from './renders/renderRaffle.tsx';
import renderStart from './renders/renderStart.tsx';

class Raffle extends Popup<RaffleI['props'], RaffleI['state']> implements RaffleI {
    parent: RaffleI['parent'];

    constructor(props: RaffleI['props']) {
        super(props);
        this.state = {
            isInit: false,
        };

        this.parent = React.createRef();
    }

    name = 'rafflePopup' as const;

    tryCounter = 0;
    allCounter = 0;

    init = init;
    sliderInit = sliderInit;

    send = send;
    getGame = getGame;
    startTrying = startTrying;

    startRaffle = startRaffle;

    renderContent = renderContent;
    renderStart = renderStart;
    renderDecors = renderDecors;
    renderHead = renderHead;
    renderRaffle = renderRaffle;
    renderPrizes = renderPrizes;

    render() {
        return this.renderPopup({
            render: () => (
                <>
                    {/* <CustomHead title="Моментальный розыгрыш" /> */}
                    {this.renderContent()}
                </>
            ),
        });
    }
}

const mapStore = (s: StoreT) => ({
    rafflePopup: s.rafflePopup,
});

export default WithStore(Raffle, mapStore);
