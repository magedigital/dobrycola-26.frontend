import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import copyHandler from './methods/copyHandler.ts';

import InvitePopupI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class InvitePopup
    extends Popup<InvitePopupI['props'], InvitePopupI['state']>
    implements InvitePopupI
{
    parent: InvitePopupI['parent'];

    constructor(props: InvitePopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'invitePopup' as const;

    copyHandler = copyHandler;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: this.renderContent.bind(this),
        });
    }
}

export default InvitePopup;
