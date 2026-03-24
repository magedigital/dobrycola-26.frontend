import React from 'react';

import Default from '@components/default/Default.tsx';

import HeaderI from './types.ts';

import renderCards from './renders/renderCards.tsx';
import renderHead from './renders/renderHead.tsx';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderHead = renderHead;
    renderCards = renderCards;

    render() {
        return (
            <div ref={this.parent} className="productsHeader _SECTION">
                {this.renderHead()}
                {this.renderCards()}
            </div>
        );
    }
}

export default Header;
