import I from '../types.ts';

const location4Animate: I['location4Animate'] = function () {
    const locationNode = this.parent.current!.querySelector<HTMLElement>(
        `.indexMap__mapLocation[data-location="4"]`,
    );

    if (!locationNode) {
        return;
    }

    const timerId = 'loc-4';
    const lightsNodes = locationNode.querySelectorAll<HTMLElement>('.indexMap__mapLocation4Point');

    clearTimeout(this.timers[timerId]);

    lightsNodes.forEach((n) => {
        n.classList.remove('_show');
    });

    let current = 0;

    const showLines = () => {
        const max = Math.ceil(lightsNodes.length);

        lightsNodes.forEach((n) => {
            n.classList.remove('_show');
        });

        lightsNodes[current]?.classList.add('_show');

        current += 1;

        if (current >= max) {
            current = 0;

            this.timers[timerId] = setTimeout(showLines, 180);

            return;
        }

        this.timers[timerId] = setTimeout(showLines, 180);
    };

    showLines();
};

export default location4Animate;
