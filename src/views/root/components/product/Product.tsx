import React from 'react';

import Default from '@components/default/Default.tsx';

import changePropsCb from './methods/changePropsCb.ts';
import checkSlider from './methods/checkSlider.ts';
import rotateHandler from './methods/rotateHandler.ts';
import sliderInit from './methods/sliderInit.ts';
import stopEvents from './methods/stopEvents.ts';

import ProductI from './types.ts';

import renderBack from './renders/renderBack.tsx';
import renderMain from './renders/renderMain.tsx';
import renderMainSlider from './renders/renderMainSlider.tsx';

class Product extends Default<ProductI['props'], ProductI['state']> implements ProductI {
    parent: ProductI['parent'];
    timerId: ProductI['timerId'];
    slider: ProductI['slider'];

    constructor(props: ProductI['props']) {
        super(props);
        this.state = {};

        this.stopEvents = this.stopEvents.bind(this);

        this.parent = React.createRef();
    }

    changingProps = ['canSlider'];

    changePropsCb = changePropsCb;

    rotateHandler = rotateHandler;
    sliderInit = sliderInit;
    checkSlider = checkSlider;
    stopEvents = stopEvents;

    renderMain = renderMain;
    renderBack = renderBack;
    renderMainSlider = renderMainSlider;

    render() {
        const { isRotate, isRotateComplete } = this.state;

        return (
            <div
                ref={this.parent}
                className={`product ${isRotate ? '_rotate' : ''} ${isRotateComplete ? '_rotateComplete' : ''}`}
            >
                {this.renderMain()}
                {this.renderBack()}
            </div>
        );
    }
}

export default Product;
