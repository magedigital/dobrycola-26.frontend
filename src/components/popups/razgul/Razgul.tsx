import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import RazgulI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class Razgul extends Popup<RazgulI['props'], RazgulI['state']> implements RazgulI {
    parent: RazgulI['parent'];

    constructor(props: RazgulI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'razgulPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: () => <>{this.renderContent({})}</>,
            withTopBar: false,
            className: '_overlay',
        });
    }
}

export default Razgul;
