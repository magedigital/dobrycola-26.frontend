import { setClipSize } from '@utils/setClipSize.ts';

import I from '../types.ts';

const setClips: I['setClips'] = function () {
    const decors = this.parent.current!.querySelectorAll<HTMLElement>('._CLIP');

    decors.forEach((d) => {
        setClipSize(d);
    });
};

export default setClips;
