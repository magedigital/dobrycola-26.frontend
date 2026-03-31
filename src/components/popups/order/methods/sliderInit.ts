import Slider from '@services/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = async function () {
    const { currentOrderIndex, content } = this.state;
    const slider = this.parent.current!.querySelector('.popup__merch') as HTMLElement;

    if (this.slider) {
        this.slider.destroy();
    }

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.popup__merchInner')!,
        moveArea: this.parent.current!.querySelector('.popup__merchItems')!,
        itemClass: 'popup__merchItemsItem',
        showEach: true,
        infinity: true,
        reactMoveArea: this.parent.current!.querySelector(
            '.popup__merchReactItems',
        )! as HTMLElement,
        withDrag: true,
        current: currentOrderIndex,
        callback: async ({ currentKey, items, reactSetCb }) => {
            if (typeof currentKey === 'number') {
                // console.log(currentKey)
                await this.asyncSetState({ currentOrderIndex: currentKey });
            }

            if (items) {
                const resultItems = items.map((item) => {
                    const product = content!.components.buy.merch.prizes[item.key];

                    return {
                        ...product,
                        isCurrent: item.isCurrent,
                        id: item.id,
                    };
                });

                await this.asyncSetState({ items: resultItems });

                if (reactSetCb) {
                    reactSetCb();
                }
            }
        },
        buttons: {
            prev: slider.querySelector('.popup__merchButton._prev') as HTMLElement,
            next: slider.querySelector('.popup__merchButton._next') as HTMLElement,
        },
        notDragItems: ['.merch__dobroInput'],
    });
};

export default sliderInit;
