import React from 'react';

import I from '../types.ts';

import Anket from '../pages/anket/Anket.tsx';
import BotAnket from '../pages/botAnket/BotAnket.tsx';
import BotReg from '../pages/botReg/BotReg.tsx';
import Faq from '../pages/faq/Faq.tsx';
import FullAnket from '../pages/fullAnket/FullAnket.tsx';
import Games from '../pages/game/Game.tsx';
import Index from '../pages/index/Index.tsx';
import Prizes from '../pages/prizes/Prizes.tsx';
import Products from '../pages/products/Products.tsx';
import Profile from '../pages/profile/Profile.tsx';
import Raffle from '../pages/raffle/Raffle.tsx';
import Rules from '../pages/rules/Rules.tsx';
import Winners from '../pages/winners/Winners.tsx';

export const rootPages = {
    index: {
        render(this: I) {
            return <Index />;
        },
    },
    faq: {
        render(this: I) {
            return <Faq />;
        },
    },
    profile: {
        render(this: I) {
            return <Profile />;
        },
    },
    anket: {
        render(this: I) {
            return <Anket />;
        },
    },
    fullAnket: {
        render(this: I) {
            return <FullAnket />;
        },
    },
    winners: {
        render(this: I) {
            return <Winners />;
        },
    },
    products: {
        render(this: I) {
            return <Products />;
        },
    },
    rules: {
        render(this: I) {
            return <Rules />;
        },
    },
    raffle: {
        render(this: I) {
            return <Raffle />;
        },
    },
    prizes: {
        render(this: I) {
            return <Prizes />;
        },
    },
    game: {
        render(this: I) {
            return <Games />;
        },
    },
    botReg: {
        render(this: I) {
            return <BotReg />;
        },
    },
    botAnket: {
        render(this: I) {
            return <BotAnket />;
        },
    },
} as const;
