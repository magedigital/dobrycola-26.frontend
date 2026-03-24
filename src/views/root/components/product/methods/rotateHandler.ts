import I from '../types.ts';

const rotateHandler: I['rotateHandler'] = async function (isRotate) {
    if (this.timerId) {
        clearTimeout(this.timerId);
    }

    await this.asyncSetState({ isRotate });

    this.timerId = setTimeout(async () => {
        await this.asyncSetState({ isRotateComplete: isRotate });
    }, 150);
};

export default rotateHandler;
