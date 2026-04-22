import DefaultI from '@components/default/types';

import { MainContentT } from '../../types';

type PropsT = {
    mainContent: MainContentT;
};

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

    setDecors(this: HeaderI): void;

    renderContent(this: HeaderI): React.ReactNode;
    renderSlider(this: HeaderI): React.ReactNode;
    renderCircle(this: HeaderI): React.ReactNode;

    renderDecors(this: HeaderI): React.ReactNode;
    renderDecor1(this: HeaderI): React.ReactNode;
    renderDecor2(this: HeaderI): React.ReactNode;
    renderDecor3(this: HeaderI): React.ReactNode;
    renderDecor4(this: HeaderI): React.ReactNode;
    renderDecor5(this: HeaderI): React.ReactNode;
    renderDecor6(this: HeaderI): React.ReactNode;
}

export default HeaderI;
