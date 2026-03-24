import DefaultI from '@components/default/types';
import Slider from '@services/slider/Slider';

import { ProductT } from '../../pages/products/types';

type PropsT = {
    products: ProductT[];
    is5ka?: boolean;
};

type StateT = {
    current: number;
    products?: ThisProductT[];
};

type ThisProductT = ProductT & { id: string; isCurrent: boolean };

interface ProductsI extends DefaultI<PropsT, StateT> {
    slider?: Slider;

    sliderInit(this: ProductsI): void;

    getProducts(this: ProductsI): ProductT[];
    setProducts(this: ProductsI, products: ThisProductT[]): Promise<void>;
    updateProducts(
        this: ProductsI,
        items: { key: number; id: string; isCurrent: boolean }[],
    ): Promise<void>;

    renderButtons(this: ProductsI): React.ReactNode;
    renderMobButtons(this: ProductsI): React.ReactNode;
    renderSlider(this: ProductsI): React.ReactNode;
}

export default ProductsI;
