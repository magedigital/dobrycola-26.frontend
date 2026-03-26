import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    try {
        await this.startGame({ play: false });
    } catch (e) {}
    await this.asyncSetState({ isInit: true });
    this.sliderInit();

    this.unmountHandlers.all = () => {
        if (this.slider) {
            this.slider.destroy();
        }

        if (this.fireId) {
            cancelAnimationFrame(this.fireId);
        }
    };

    // this.startFires();
};

export default init;
