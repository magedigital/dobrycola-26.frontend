import I from '../types.ts';

const setPagesRenderKey: I['setPagesRenderKey'] = async function () {
    await this.asyncSetState({ pagesRenderKey: new Date().getTime().toString() });
};

export default setPagesRenderKey;
