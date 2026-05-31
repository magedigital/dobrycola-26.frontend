import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import LukoilI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class Lukoil extends Popup<LukoilI['props'], LukoilI['state']> implements LukoilI {
    parent: LukoilI['parent'];

    constructor(props: LukoilI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'lukoilPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: () => <>{this.renderContent({})}</>,
            withTopBar: false,
            className: '_overlay',
        });
    }
}

export default Lukoil;
