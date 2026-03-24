import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    this.unmountHandlers.all = () => {
        if (this.slider) {
            this.slider.destroy();
        }

        if (this.timerId) {
            clearTimeout(this.timerId);
        }

        const buttons = this.parent.current!.querySelectorAll('.product__sliderButton');

        buttons.forEach((button) => {
            (button.removeEventListener as ListenerT)('touchstart', this.stopEvents, {
                passive: false,
            });
            (button.removeEventListener as ListenerT)('mousedown', this.stopEvents, {
                passive: false,
            });
        });
    };
};

export default init;
