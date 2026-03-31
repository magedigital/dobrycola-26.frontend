import React from 'react';

import Popup from '@components/popup/Popup.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import init from './methods/init.ts';
import merchInfoHandler from './methods/merchInfoHandler.ts';
import send from './methods/send.ts';
import sliderInit from './methods/sliderInit.ts';

import OrderI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderSlider from './renders/renderSlider.tsx';

class Order extends Popup<OrderI['props'], OrderI['state']> implements OrderI {
    parent: OrderI['parent'];
    slider: OrderI['slider'];

    constructor(props: OrderI['props']) {
        super(props);
        this.state = {
            currentOrderIndex: 0,
            isInit: false,
        };

        this.parent = React.createRef();
    }

    name = 'orderPopup' as const;

    init = init;
    send = send;

    sliderInit = sliderInit;
    merchInfoHandler = merchInfoHandler;

    renderContent = renderContent;
    renderSlider = renderSlider;
    renderHead = renderHead;

    render() {
        return this.renderPopup({
            render: () => (
                <>
                    {/* <CustomHead title="Заказ приза" /> */}
                    {this.renderContent()}
                </>
            ),
        });
    }
}

const mapStore = (s: StoreT) => ({
    orderPopup: s.orderPopup,
});

export default WithStore(Order, mapStore);
