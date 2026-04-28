import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    this.widgetLoad();

    this.unmountHandlers.all = () => {
        if (this.fivepost) {
            this.fivepost.destroy();
        }
    };
};

export default init;
