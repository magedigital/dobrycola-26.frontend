import { setClipSize } from '@utils/setClipSize.ts';

import I from '../types.ts';

const setDecors: I['setDecors'] = function () {
    const decors = this.parent.current!.querySelectorAll<HTMLElement>('._DECOR');

    decors.forEach((d) => {
        setClipSize(d);
    });
};

export default setDecors;
