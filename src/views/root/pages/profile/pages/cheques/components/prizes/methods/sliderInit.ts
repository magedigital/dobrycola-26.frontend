import Slider from '@services/slider/Slider.ts';
import { appStore } from '@store/store.tsx';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = function () {
    const slider = this.parent.current! as HTMLElement;

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.profilePrizes__slider')!,
        moveArea: this.parent.current!.querySelector('.profilePrizes__sliderItems')!,
        itemClass: 'profilePrizes__sliderItem',
        // showEach: true,
        infinity: true,
        withDrag: true,
        callback: async ({ currentKey }) => {
            if (typeof currentKey === 'number') {
                slider.querySelectorAll<HTMLElement>('.profilePrizes__prizeButton').forEach((b) => {
                    b.onclick = () => {
                        const card = b.closest('.profilePrizes__prize') as HTMLElement;
                        const id = card.getAttribute('data-id');

                        appStore
                            .getState()
                            .setPopup({ name: 'prizeOrderPopup', data: { code: id! } });
                    };
                });
            }
        },
        notDragItems: ['.profilePrizes__prizeButton'],
        buttons: {
            prev: slider.querySelector('.profilePrizes__sliderButton._prev') as HTMLElement,
            next: slider.querySelector('.profilePrizes__sliderButton._next') as HTMLElement,
        },
    });
};

export default sliderInit;
