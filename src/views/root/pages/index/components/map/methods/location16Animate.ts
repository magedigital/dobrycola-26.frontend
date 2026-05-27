import I from '../types.ts';

const location16Animate: I['location16Animate'] = function () {
    const locationNode = this.parent.current!.querySelector<HTMLElement>(
        `.indexMap__mapLocation[data-location="16"]`,
    );

    if (!locationNode) {
        return;
    }

    const timerId = 'lights-16';
    const lightsNodes = locationNode.querySelectorAll<HTMLElement>('.indexMap__mapLocation16Light');

    clearTimeout(this.timers[timerId]);

    lightsNodes.forEach((n) => {
        n.classList.remove('_show');
    });

    let current = -1;

    const showLines = () => {
        const max = Math.ceil(lightsNodes.length / 1);

        current += 1;

        lightsNodes.forEach((n) => {
            n.classList.remove('_show');
        });

        lightsNodes[current]?.classList.add('_show');

        if (current >= max) {
            current = -1;

            this.timers[timerId] = setTimeout(showLines, 500);

            return;
        }

        this.timers[timerId] = setTimeout(showLines, 150);
    };

    showLines();
};

export default location16Animate;
