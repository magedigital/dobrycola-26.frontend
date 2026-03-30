import React from 'react';

import Editor from '@components/editor/Editor.tsx';

import sendForm from './methods/sendForm.ts';

import BotAnketI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class BotAnket
    extends Editor<BotAnketI['props'], BotAnketI['state']>
    implements BotAnketI
{
    parent: BotAnketI['parent'];

    constructor(props: BotAnketI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    sendForm = sendForm;

    renderContent = renderContent;

    render() {
        return (
            <div className="popup _FULL _back">
                <div className="popup__wrapper _FULL">
                    <div className="popup__wrapperBox _notBar">
                        <div className="popup__inner">
                            <div className="popup__innerBox">{this.renderContent()}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BotAnket;
