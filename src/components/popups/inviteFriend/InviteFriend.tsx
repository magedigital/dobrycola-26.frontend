import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import InviteFriendI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class InviteFriend
    extends Popup<InviteFriendI['props'], InviteFriendI['state']>
    implements InviteFriendI
{
    parent: InviteFriendI['parent'];

    constructor(props: InviteFriendI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'inviteFriendPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: () => <>{this.renderContent({})}</>,
            withTopBar: false,
            className: '_overlay',
        });
    }
}

export default InviteFriend;
