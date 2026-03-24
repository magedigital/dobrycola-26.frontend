import React from 'react';

import Default from '@components/default/Default.tsx';

import forceRotate from './methods/forceRotate.ts';
import getSliderItems from './methods/getSliderItems.ts';
import init from './methods/init.ts';
import sliderInit from './methods/sliderInit.ts';
import startRotate from './methods/startRotate.ts';

import HeaderI from './types.ts';

import renderCircle from './renders/renderCircle.tsx';
import renderContent from './renders/renderContent.tsx';
import renderSlider from './renders/renderSlider.tsx';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    rotateSpeed = 1;
    rotateDeg = 0;

    init = init;

    getSliderItems = getSliderItems;
    sliderInit = sliderInit;

    startRotate = startRotate;
    forceRotate = forceRotate;

    renderContent = renderContent;
    renderSlider = renderSlider;
    renderCircle = renderCircle;

    render() {
        return (
            <div ref={this.parent} className="indexHeader _SECTION" data-ancor="index">
                <div className="indexHeader__inner _INNER">
                    {this.renderContent()}
                    {this.renderSlider()}
                    {this.renderCircle()}
                </div>
            </div>
        );
    }
}

export default Header;
