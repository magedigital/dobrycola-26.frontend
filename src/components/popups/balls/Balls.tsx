import React from 'react';

import Popup from '@components/popup/Popup.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import BallsPopupI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderTableCol from './renders/renderTableCol.tsx';
import renderTableEmpty from './renders/renderTableEmpty.tsx';

class BallsPopup extends Popup<BallsPopupI['props'], BallsPopupI['state']> implements BallsPopupI {
    parent: BallsPopupI['parent'];

    constructor(props: BallsPopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'ballsPopup' as const;

    renderContent = renderContent;
    renderTableCol = renderTableCol;
    renderTableEmpty = renderTableEmpty;

    render() {
        return this.renderPopup({
            render: this.renderContent.bind(this),
        });
    }
}

const mapStore = (store: StoreT) => ({
    profileData: store.profileData,
});

export default WithStore(BallsPopup, mapStore);
