import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import PyterochkaI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class Pyterochka extends Popup<PyterochkaI['props'], PyterochkaI['state']> implements PyterochkaI {
    parent: PyterochkaI['parent'];

    constructor(props: PyterochkaI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'pyterochkaPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: () => <>{this.renderContent({})}</>,
            withTopBar: false,
            className: '_overlay',
        });
    }
}

export default Pyterochka;
