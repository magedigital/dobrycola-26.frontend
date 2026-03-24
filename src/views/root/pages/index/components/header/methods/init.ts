import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    this.sliderInit();
    this.startRotate();
};

export default init;
