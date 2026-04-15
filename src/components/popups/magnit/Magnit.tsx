import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import MagnitI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class Magnit extends Popup<MagnitI['props'], MagnitI['state']> implements MagnitI {
    parent: MagnitI['parent'];

    constructor(props: MagnitI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'magnitPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: () => <>{this.renderContent({})}</>,
            withTopBar: false,
            className: '_overlay',
        });
    }
}

export default Magnit;
