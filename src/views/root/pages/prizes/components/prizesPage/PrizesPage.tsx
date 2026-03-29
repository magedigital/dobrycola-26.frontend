import React from 'react';

import Default from '@components/default/Default.tsx';
import { appStore } from '@store/store.tsx';

import init from './methods/init.ts';
import sliderInit from './methods/sliderInit.ts';

import PrizesPageI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';

class PrizesPage
    extends Default<PrizesPageI['props'], PrizesPageI['state']>
    implements PrizesPageI
{
    parent: PrizesPageI['parent'];
    slider: PrizesPageI['slider'];

    constructor(props: PrizesPageI['props']) {
        super(props);
        this.state = {
            needSlider: this.props.items.length > 4 || appStore.getState().device === 'mobile',
        };

        this.parent = React.createRef();
    }

    init = init;

    sliderInit = sliderInit;

    renderHead = renderHead;
    renderContent = renderContent;

    render() {
        const { needSlider } = this.state;
        const { name } = this.props;

        return (
            <div
                ref={this.parent}
                className={`prizesPage _FULL_W _COL _COL_H_CENTER _${name} ${needSlider ? '_slider' : ''}`}
            >
                {/* <CustomHead title={metaTitle} /> */}

                {this.renderHead()}
                {this.renderContent()}
            </div>
        );
    }
}

export default PrizesPage;
