import React from 'react';

import Button from '@components/button/Button.tsx';
import Default from '@components/default/Default.tsx';

import getProducts from './methods/getProducts.ts';
import init from './methods/init.ts';
import setProducts from './methods/setProducts.ts';
import sliderInit from './methods/sliderInit.ts';
import updateProducts from './methods/updateProducts.ts';

import ProductsI from './types.ts';

import renderButtons from './renders/renderButtons.tsx';
import renderMobButtons from './renders/renderMobButtons.tsx';
import renderSlider from './renders/renderSlider.tsx';

class Products extends Default<ProductsI['props'], ProductsI['state']> implements ProductsI {
    parent: ProductsI['parent'];

    constructor(props: ProductsI['props']) {
        super(props);
        this.state = {
            current: 0,
        };

        this.parent = React.createRef();
    }

    init = init;

    sliderInit = sliderInit;
    setProducts = setProducts;
    updateProducts = updateProducts;
    getProducts = getProducts;

    renderButtons = renderButtons;
    renderMobButtons = renderMobButtons;
    renderSlider = renderSlider;

    render() {
        const { is5ka } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass('products _FULL_W _COL _COL_H_CENTER', is5ka && '_5ka')}
            >
                <div className="products__slider _FULL_W">
                    {this.renderButtons()}
                    {this.renderSlider()}
                    {this.renderMobButtons()}
                </div>
                {!is5ka && (
                    <div className="products__button">
                        <Button
                            className="_white"
                            onClick={() => {
                                // changePage({ pageName: 'regCode' });
                            }}
                        >
                            Участвовать
                        </Button>
                    </div>
                )}
            </div>
        );
    }
}

export default Products;
