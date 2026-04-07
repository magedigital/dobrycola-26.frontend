import React from 'react';

import Default from '@components/default/Default.tsx';

import PrizesI from './types.ts';

import renderCheques from './renders/renderCheques.tsx';
import renderPrizes from './renders/renderPrizes.tsx';
import renderPromo from './renders/renderPromo.tsx';

class Prizes extends Default<PrizesI['props'], PrizesI['state']> implements PrizesI {
    parent: PrizesI['parent'];

    constructor(props: PrizesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderPrizes = renderPrizes;
    renderCheques = renderCheques;
    renderPromo = renderPromo;

    render() {
        return (
            <div ref={this.parent} className="fivekaPrizes _SECTION">
                <div className="fivekaPrizes__decor _1"></div>
                <div className="fivekaPrizes__decor _2"></div>
                <div className="fivekaPrizes__inner _INNER">
                    {this.renderPrizes()}
                    {this.renderCheques()}
                    {this.renderPromo()}
                </div>
            </div>
        );
    }
}

export default Prizes;
