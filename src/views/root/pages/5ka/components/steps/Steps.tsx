import React from 'react';

import Default from '@components/default/Default.tsx';

import StepsI from './types.ts';

import renderCards from './renders/renderCards.tsx';
import renderOffer from './renders/renderOffer.tsx';

class Steps extends Default<StepsI['props'], StepsI['state']> implements StepsI {
    parent: StepsI['parent'];

    constructor(props: StepsI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderCards = renderCards;
    renderOffer = renderOffer;

    render() {
        return (
            <div ref={this.parent} className="fivekaSteps _SECTION">
                <div className="fivekaSteps__decor _1"></div>
                <div className="fivekaSteps__decor _2"></div>
                <div className="fivekaSteps__inner _INNER">
                    {this.renderCards()}
                    {this.renderOffer()}
                </div>
            </div>
        );
    }
}

export default Steps;
