import React from 'react';

import I from '../types.ts';

import Anket from '../pages/anket/Anket.tsx';
import Faq from '../pages/faq/Faq.tsx';
import Index from '../pages/index/Index.tsx';
import Products from '../pages/products/Products.tsx';
import Profile from '../pages/profile/Profile.tsx';
import Rules from '../pages/rules/Rules.tsx';
import Winners from '../pages/winners/Winners.tsx';

const pages = {
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
    // fullAnket: {
    //     render(this: I) {
    //         return <FullAnket />;
    //     },
    // },
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
} as const;

export default pages;
