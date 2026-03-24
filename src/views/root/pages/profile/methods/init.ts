import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    await this.getContent();

    document.addEventListener('getProfileContent', this.getContent);

    this.unmountHandlers.all = () => {
        document.removeEventListener('getProfileContent', this.getContent);
    };
};

export default init;
