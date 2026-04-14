import { appStore } from '@store/store.tsx';

import I from '../types.ts';

const setDecors: I['setDecors'] = function () {
    const device = appStore.getState().device;
    const decors = this.parent.current!.querySelectorAll<HTMLElement>('._DECOR');

    decors.forEach((d) => {
        const startScale = +d.getAttribute(device === 'desktop' ? 'data-scale' : 'data-mobscale')!;
        const scale = (window.widthValue / (device === 'desktop' ? 1512 : 414)) * startScale;

        d.style.transform = `scale(${scale})`;
    });
};

export default setDecors;
