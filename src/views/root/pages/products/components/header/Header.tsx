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
                <h1 className="productsHeader__title _TITLE _inner">Продукты-участники</h1>
                <div className="productsHeader__content">
                    <Products products={content.components.products} />
                </div>
            </div>
        );
    }
}

export default Header;
