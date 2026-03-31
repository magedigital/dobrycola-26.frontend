import Slider from '@services/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = async function () {
    const slider = this.parent.current!.querySelector('.popup__raffleStart') as HTMLElement;

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.popup__raffleStartSlider')!,
        moveArea: this.parent.current!.querySelector('.popup__raffleStartSliderItems')!,
        itemClass: 'popup__raffleStartSliderItem',
        showEach: true,
        infinity: true,
        withDrag: true,
        buttons: {
            prev: slider.querySelector('.popup__raffleStartButton._prev') as HTMLElement,
            next: slider.querySelector('.popup__raffleStartButton._next') as HTMLElement,
        },
    });
};

export default sliderInit;
