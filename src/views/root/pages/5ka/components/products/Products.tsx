import React from 'react';

import Default from '@components/default/Default.tsx';

import Products from '../../../../components/products/Products.tsx';

import ProductsI from './types.ts';

class Products5ka extends Default<ProductsI['props'], ProductsI['state']> implements ProductsI {
    parent: ProductsI['parent'];

    constructor(props: ProductsI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { content } = this.props;

        return (
            <div ref={this.parent} className="fivekaProducts _SECTION">
                <div className="fivekaProducts__inner _INNER">
                    <h3 className="fivekaProducts__title _TITLE">Продукты-участники</h3>
                    <div className="fivekaProducts__content">
                        <Products is5ka={true} products={content.components.products} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Products5ka;
