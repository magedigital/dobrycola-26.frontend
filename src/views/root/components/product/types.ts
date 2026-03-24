import DefaultI from '@components/default/types';
import Slider from '@services/slider/Slider';

import { ProductT } from '../../pages/products/types';

type PropsT = {
    product: ProductT;
    is5ka?: boolean;
    canSlider: boolean;
};

type StateT = {
    isRotate?: boolean;
    isRotateComplete?: boolean;
};

interface ProductI extends DefaultI<PropsT, StateT> {
    slider?: Slider;
    timerId?: ReturnType<typeof setTimeout>;
    canSlider?: boolean;

    rotateHandler(this: ProductI, isRotate?: boolean): Promise<void>;
    sliderInit(this: ProductI): void;
    checkSlider(this: ProductI): void;
    stopEvents(e: Event): void;

    renderMain(this: ProductI): React.ReactNode;
    renderBack(this: ProductI): React.ReactNode;
    renderMainSlider(this: ProductI): React.ReactNode;
}

export default ProductI;
