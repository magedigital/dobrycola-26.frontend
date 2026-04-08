import Slider from '@services/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = async function () {
    const slider = this.parent.current!.querySelector('.fivekaPrizesBlock__slider') as HTMLElement;

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.fivekaPrizesBlock__sliderInner')!,
        moveArea: this.parent.current!.querySelector('.fivekaPrizesBlock__sliderItems')!,
        itemClass: 'fivekaPrizesBlock__sliderItem',
        showEach: true,
        infinity: true,
        buttons: {
            prev: slider.querySelector('.fivekaPrizesBlock__sliderButton._prev') as HTMLElement,
            next: slider.querySelector('.fivekaPrizesBlock__sliderButton._next') as HTMLElement,
        },
    });
};

export default sliderInit;
