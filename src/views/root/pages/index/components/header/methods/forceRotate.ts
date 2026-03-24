import setAnimate from '@utils/setAnimate.ts';

import I from '../types.ts';

const forceRotate: I['forceRotate'] = async function (isSet) {
    const startSpeed = this.rotateSpeed;
    const diff = (isSet ? 3 : 1) - startSpeed;

    if (this.advanceAnimationId) {
        cancelAnimationFrame(this.advanceAnimationId);

        delete this.advanceAnimationId;
    }

    setAnimate({
        duration: 1_000,
        draw: (p) => {
            this.rotateSpeed = startSpeed + diff * p;
        },
        getId: (id) => {
            this.advanceAnimationId = id;
        },
    });
};

export default forceRotate;
