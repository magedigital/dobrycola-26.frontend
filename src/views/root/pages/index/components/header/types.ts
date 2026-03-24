import DefaultI from '@components/default/types';

type PropsT = {};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {
    rotateDeg: number;
    rotateSpeed: number;
    animationId?: number;
    advanceAnimationId?: number;

    sliderInit(this: HeaderI): void;

    getSliderItems(this: HeaderI): { thumb: string }[];

    startRotate(this: HeaderI): void;
    forceRotate(this: HeaderI, s: boolean): void;

    renderContent(this: HeaderI): React.ReactNode;
    renderSlider(this: HeaderI): React.ReactNode;
    renderCircle(this: HeaderI): React.ReactNode;
}

export default HeaderI;
