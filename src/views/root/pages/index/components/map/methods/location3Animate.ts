import I from '../types.ts';

const location3Animate: I['location3Animate'] = function () {
    const locationNode = this.parent.current!.querySelector<HTMLElement>(
        `.indexMap__mapLocation[data-location="3"]`,
    );

    if (!locationNode) {
        return;
    }

    const timerId = 'lights-3';
    const lightsNodes = locationNode.querySelectorAll<HTMLElement>('.indexMap__mapLocation3Light');

    clearTimeout(this.timers[timerId]);

    lightsNodes.forEach((n) => {
        n.classList.remove('_show');
    });

    let current = -1;
    let loopCount = 0;

    const showLines = () => {
        const isOdd = Math.ceil(loopCount / 3) % 2 === 1;
        let max = Math.ceil(lightsNodes.length / (isOdd ? 2 : 1));

        if (!isOdd) {
            max = 1;
        }

        current += 1;

        lightsNodes.forEach((n) => {
            n.classList.remove('_show');
        });

        lightsNodes[current]?.classList.add('_show');

        if (isOdd) {
            lightsNodes[lightsNodes.length - current - 1]?.classList.add('_show');
        } else {
            lightsNodes.forEach((n) => {
                n.classList.add('_show');
            });
        }

        if (current >= max) {
            loopCount += 1;
            current = -1;

            lightsNodes.forEach((n) => {
                n.classList.remove('_show');
            });

            this.timers[timerId] = setTimeout(showLines, isOdd ? 0 : 300);

            return;
        }

        this.timers[timerId] = setTimeout(showLines, isOdd ? 250 : 350);
    };

    showLines();
};

export default location3Animate;
