import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import SamokatI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class Samokat extends Popup<SamokatI['props'], SamokatI['state']> implements SamokatI {
    parent: SamokatI['parent'];

    constructor(props: SamokatI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'samokatPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: () => <>{this.renderContent({})}</>,
            withTopBar: false,
            className: '_overlay',
        });
    }
}

export default Samokat;
