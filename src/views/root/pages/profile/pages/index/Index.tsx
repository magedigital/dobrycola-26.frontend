import React from 'react';

import Default from '@components/default/Default.tsx';

import codeMoreHandler from './methods/codeMoreHandler.ts';

import IndexI from './types.ts';

import renderCodes from './renders/renderCodes.tsx';
import renderPrizes from './renders/renderPrizes.tsx';
import renderRaffles from './renders/renderRaffles.tsx';
import renderTableCol from './renders/renderTableCol.tsx';
import renderTableEmpty from './renders/renderTableEmpty.tsx';

class Index extends Default<IndexI['props'], IndexI['state']> implements IndexI {
    parent: IndexI['parent'];

    constructor(props: IndexI['props']) {
        super(props);
        this.state = {
            currentCodesCount: 10,
        };
        this.parent = React.createRef();
    }

    codeMoreHandler = codeMoreHandler;

    renderCodes = renderCodes;
    renderRaffles = renderRaffles;
    renderPrizes = renderPrizes;

    renderTableCol = renderTableCol;
    renderTableEmpty = renderTableEmpty;

    render() {
        return (
            <>
                {this.renderCodes()}
                {this.renderRaffles()}
                {this.renderPrizes()}
            </>
        );
    }
}

export default Index;
