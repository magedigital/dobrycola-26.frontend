import I from '../types.ts';

const codeMoreHandler: I['codeMoreHandler'] = async function () {
    await this.asyncSetState({ currentCodesCount: this.state.currentCodesCount + 10 });
};

export default codeMoreHandler;
