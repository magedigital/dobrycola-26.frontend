import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { mode } = this.props;

    if (mode !== 'mobile') {
        return;
    }

    await this.sliderInit();

    this.unmountHandlers.all = () => {
        this.slider?.destroy();
    };
};

export default init;
