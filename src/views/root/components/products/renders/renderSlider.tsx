import React from 'react';

import I from '../types.ts';

import Product from '../../product/Product.tsx';

const renderSlider: I['renderSlider'] = function () {
    const { products } = this.state;
    const { is5ka } = this.props;
    const resultProducts = this.getProducts();

    return (
        <div className="products__sliderInner _FULL_W">
            <div className="products__sliderItems">
                {resultProducts.map((product, key) => (
                    <div className="products__sliderItem products__sliderItemsItem" key={key}></div>
                ))}
            </div>
            <div className="products__sliderReactItems">
                {products?.map((product) => (
                    <div
                        className={`products__sliderItem ${product.isCurrent ? '_current' : ''}`}
                        key={product.id}
                        data-id={product.id}
                    >
                        <Product is5ka={is5ka} product={product} canSlider={!!product.isCurrent} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default renderSlider;
