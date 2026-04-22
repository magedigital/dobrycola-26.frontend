import I from '../types.ts';

const location1Animate: I['location1Animate'] = function () {
    const locationNode = this.parent.current!.querySelector<HTMLElement>(
        `.indexMap__mapLocation[data-location="1"]`,
    );

    if (!locationNode) {
        return;
    }

    const timerId = 'lights-1';
    const lightsNodes = locationNode.querySelectorAll<HTMLElement>('.indexMap__mapLocation1Light');

    clearTimeout(this.timers[timerId]);

    lightsNodes.forEach((n) => {
        n.classList.remove('_show');
    });

    let current = -1;
    let loopCount = 0;

    const showLines = () => {
        const isOdd = Math.ceil(loopCount / 3) % 2 === 1;
        const max = Math.ceil(lightsNodes.length / (isOdd ? 2 : 1));

        current += 1;

        lightsNodes.forEach((n) => {
            n.classList.remove('_show');
        });

        lightsNodes[current]?.classList.add('_show');

        if (isOdd) {
            lightsNodes[lightsNodes.length - current - 1]?.classList.add('_show');
        }

        if (current >= max) {
            loopCount += 1;
            current = -1;

            if (isOdd) {
                lightsNodes.forEach((n) => {
                    n.classList.remove('_show');
                });
            }

            this.timers[timerId] = setTimeout(showLines, 200);

            return;
        }

        this.timers[timerId] = setTimeout(showLines, 100);
    };

    showLines();
};

export default location1Animate;
