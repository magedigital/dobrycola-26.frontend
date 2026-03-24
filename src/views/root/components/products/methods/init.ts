import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    this.sliderInit();

    this.unmountHandlers.all = () => {
        this.slider!.destroy();
    };
};

export default init;
