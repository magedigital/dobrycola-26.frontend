import I from '../types.ts';

const merchInfoHandler: I['merchInfoHandler'] = async function (merchInfoActive) {
    await this.asyncSetState({ merchInfoActive });
};

export default merchInfoHandler;
