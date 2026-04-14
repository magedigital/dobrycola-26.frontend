import I from '../types.ts';

const setDecors: I['setDecors'] = function () {
    const decors = this.parent.current!.querySelectorAll<HTMLElement>('._DECOR');

    decors.forEach((d) => {
        const startScale = +d.getAttribute('data-scale')!;
        const scale = (window.widthValue / 1512) * startScale;

        d.style.transform = `scale(${scale})`;
    });
};

export default setDecors;
