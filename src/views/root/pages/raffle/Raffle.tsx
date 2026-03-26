import { v4 } from 'uuid';

import React from 'react';

import Page from '@components/page/Page.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import init from './methods/init.ts';
import registration from './methods/registration.ts';
import sliderInit from './methods/sliderInit.ts';
import start from './methods/start.ts';
import startCarusel from './methods/startCarusel.ts';
import startFires from './methods/startFires.ts';
import startGame from './methods/startGame.ts';

import RaffleI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderFires from './renders/renderFires.tsx';
import renderHead from './renders/renderHead.tsx';
import renderResultForm from './renders/renderResultForm.tsx';
import renderSlider from './renders/renderSlider.tsx';
import renderSpinner from './renders/renderSpinner.tsx';
import renderStartForm from './renders/renderStartForm.tsx';
import getSavedRaffle from './utils/getSavedRaffle.ts';

class Raffle extends Page<RaffleI['props'], RaffleI['state']> implements RaffleI {
    parent: RaffleI['parent'];
    gameId: RaffleI['gameId'];
    isStart: RaffleI['isStart'];

    constructor(props: RaffleI['props']) {
        super(props);

        const savedPrize = getSavedRaffle().prize;

        this.state = {
            prize: savedPrize,
            curIndex: savedPrize ? savedPrize.index : undefined,
            isStart: !!savedPrize,
            isComplete: !!savedPrize,
            isResult: !!savedPrize,
            isInit: false,
        };

        this.isStart = !!savedPrize;

        this.parent = React.createRef();

        this.gameId = savedPrize?.id || v4();
    }

    mode = 'inner' as const;

    startDur = 1_000;
    resultDur = 1_500;

    rotateDeg = 0;
    rotateSpeed = 0;

    init = init;

    sliderInit = sliderInit;

    start = start;
    startCarusel = startCarusel;
    startFires = startFires;

    startGame = startGame;
    registration = registration;

    renderContent = renderContent;
    renderHead = renderHead;
    renderSlider = renderSlider;
    renderSpinner = renderSpinner;
    renderFires = renderFires;

    renderStartForm = renderStartForm;
    renderResultForm = renderResultForm;

    render() {
        return this.renderPage({
            render: () => <>{this.renderContent()}</>,
            className: '_innerReverse',
        });
    }
}

const mapStore = (s: StoreT) => ({
    authUser: s.authUser,
});

export default WithStore(Raffle, mapStore);
