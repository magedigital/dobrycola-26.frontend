import Slider from '@services/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = function () {
    const slider = this.parent.current!.querySelector('.indexHeader__slider') as HTMLElement;

    const SliderInst = new Slider({
        slider,
        area: slider.querySelector('.indexHeader__sliderInner')!,
        moveArea: slider!.querySelector('.indexHeader__sliderItems')!,
        itemClass: 'indexHeader__sliderItem',
        infinity: true,
        showEach: true,
        withDrag: false,
        duration: 350,
        callback: ({ current }) => {
            if (typeof current === 'number') {
                const currentNode = slider.querySelector<HTMLElement>(
                    `.indexHeader__sliderItem[data-id="${current}"]`,
                );
                const activeNode = slider.querySelector<HTMLElement>(
                    `.indexHeader__sliderItem[data-active]`,
                );

                if (activeNode) {
                    activeNode.removeAttribute('data-active');
                }

                slider.querySelectorAll('.indexHeader__sliderItem[data-show]').forEach((n) => {
                    n.removeAttribute('data-show');
                });

                if (currentNode) {
                    currentNode.setAttribute('data-show', 'true');
                    const nextNode = currentNode.nextElementSibling as HTMLElement;

                    if (nextNode) {
                        nextNode.setAttribute('data-show', 'true');
                        nextNode.setAttribute('data-active', 'true');

                        const nextNextNode = nextNode.nextElementSibling as HTMLElement;

                        if (nextNextNode) {
                            nextNextNode.setAttribute('data-show', 'true');
                        }
                    }
                }
            }
        },
    });

    this.intervals.slider = setInterval(() => {
        SliderInst.buttonHandler({ dir: 'next' });
    }, 3_000);

    window.visibillityHandlers.indexSlider = (s) => {
        clearInterval(this.intervals.slider);

        if (s) {
            this.intervals.slider = setInterval(() => {
                SliderInst.buttonHandler({ dir: 'next' });
            }, 3_000);
        }
    };

    this.unmountHandlers.slider = () => {
        delete window.visibillityHandlers.indexSlider;
        SliderInst.destroy();
    };
};

export default sliderInit;
