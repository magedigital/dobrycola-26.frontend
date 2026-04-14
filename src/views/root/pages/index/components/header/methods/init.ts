import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    this.sliderInit();
    this.startRotate();

    this.setDecors();

    document.addEventListener('customResize', this.setDecors);

    this.unmountHandlers.all = () => {
        document.removeEventListener('customResize', this.setDecors);
    };
};

export default init;
