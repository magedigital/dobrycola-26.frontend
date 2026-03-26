import Slider from '@services/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = function () {
    const slider = this.parent.current!.querySelector('.raffle__slider') as HTMLElement;

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.raffle__sliderInner')!,
        moveArea: this.parent.current!.querySelector('.raffle__sliderItems')!,
        itemClass: 'raffle__sliderItem',
        showEach: true,
        infinity: false,
        withDrag: false,
        callback: ({ current }) => {
            if (typeof current === 'number') {
                const itemNode = this.parent.current!.querySelector(
                    `.raffle__sliderItem[data-id="${current}"]`,
                ) as HTMLElement;

                this.parent
                    .current!.querySelectorAll('.raffle__sliderItem[data-cur]')
                    .forEach((n) => {
                        n.removeAttribute('data-cur');
                    });

                if (itemNode) {
                    const nextItem = itemNode.nextElementSibling;
                    const curItem = nextItem?.nextElementSibling;

                    if (curItem) {
                        curItem.setAttribute('data-cur', 'true');
                    }
                }
            }
        },
    });

    if (this.state.curIndex) {
        this.slider.moveToCurrentItem({ current: this.state.curIndex - 2, force: true });
    }
};

export default sliderInit;
