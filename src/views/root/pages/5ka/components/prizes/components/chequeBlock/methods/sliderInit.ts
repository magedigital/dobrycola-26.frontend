import Slider from '@services/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = async function () {
    const { mode } = this.props;

    if (mode !== 'mobile') {
        return;
    }

    const slider = this.parent.current!.querySelector(
        '.fivekaPrizes__chequesSlider',
    ) as HTMLElement;

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.fivekaPrizes__chequesSliderInner')!,
        moveArea: this.parent.current!.querySelector('.fivekaPrizes__chequesSliderItems')!,
        itemClass: 'fivekaPrizes__chequesSliderItem',
        showEach: true,
        infinity: true,
        buttons: {
            prev: slider.querySelector('.fivekaPrizes__chequesSliderButton._prev') as HTMLElement,
            next: slider.querySelector('.fivekaPrizes__chequesSliderButton._next') as HTMLElement,
        },
    });
};

export default sliderInit;
