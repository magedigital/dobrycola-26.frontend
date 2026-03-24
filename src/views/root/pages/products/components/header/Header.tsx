import React from 'react';

import Default from '@components/default/Default.tsx';

import Products from '../../../../components/products/Products.tsx';

import HeaderI from './types.ts';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { content } = this.props;

        return (
            <div ref={this.parent} className="productsHeader _SECTION">
                <Products products={content.components.products} />
            </div>
        );
    }
}

export default Header;
