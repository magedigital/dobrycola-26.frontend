import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    await this.getGame();

    this.unmountHandlers.all = () => {
        if (this.slider) {
            this.slider.destroy();
        }
    };
};

export default init;
