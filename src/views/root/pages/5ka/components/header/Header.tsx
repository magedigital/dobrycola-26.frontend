import React from 'react';

import Default from '@components/default/Default.tsx';

import HeaderI from './types.ts';

import renderArm from './renders/renderArm.tsx';
import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderHead = renderHead;
    renderArm = renderArm;
    renderContent = renderContent;

    render() {
        return (
            <div ref={this.parent} className="fivekaHeader _SECTION">
                <div className="fivekaHeader__inner _INNER">
                    {this.renderArm()}
                    {this.renderHead()}
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

export default Header;
