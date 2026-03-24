import React from 'react';

import Default from '@components/default/Default.tsx';

import promoHandler from './methods/promoHandler.ts';

import PrizeI from './types.ts';

import renderFoot from './renders/renderFoot.tsx';
import renderHead from './renders/renderHead.tsx';
import renderMain from './renders/renderMain.tsx';
import renderPreview from './renders/renderPreview.tsx';
import renderPromo from './renders/renderPromo.tsx';

class Prize extends Default<PrizeI['props'], PrizeI['state']> implements PrizeI {
    parent: PrizeI['parent'];

    constructor(props: PrizeI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    promoHandler = promoHandler;

    renderHead = renderHead;
    renderPreview = renderPreview;
    renderFoot = renderFoot;

    renderMain = renderMain;
    renderPromo = renderPromo;

    render() {
        const { isPromoShow, isPromoForceShow } = this.state;
        const { prize } = this.props;

        return (
            <div
                ref={this.parent}
                className={`prize _FULL _${prize.status} ${isPromoShow ? '_promoShow' : ''} ${isPromoForceShow ? '_promoForceShow' : ''}`}
            >
                {this.renderMain()}
                {this.renderPromo()}
            </div>
        );
    }
}

export default Prize;
