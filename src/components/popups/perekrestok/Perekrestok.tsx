import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import PerekrestokI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class Perekrestok
    extends Popup<PerekrestokI['props'], PerekrestokI['state']>
    implements PerekrestokI
{
    parent: PerekrestokI['parent'];

    constructor(props: PerekrestokI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'perekrestokPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: () => <>{this.renderContent({})}</>,
            withTopBar: false,
            className: '_overlay',
        });
    }
}

export default Perekrestok;
