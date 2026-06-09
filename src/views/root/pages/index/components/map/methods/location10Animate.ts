import I from '../types.ts';

const location10Animate: I['location10Animate'] = function () {
    const locationNode = this.parent.current!.querySelector<HTMLElement>(
        `.indexMap__mapLocation[data-location="10"]`,
    );

    if (!locationNode) {
        return;
    }

    if (1) {
        const timerId = 'lights-10';
        const lightsNodes = locationNode.querySelectorAll<HTMLElement>(
            '.indexMap__mapLocation10Light',
        );

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

                this.timers[timerId] = setTimeout(showLines, 0);

                return;
            }

            this.timers[timerId] = setTimeout(showLines, 400);
        };

        showLines();
    }

    if (1) {
        const timerId = 'lights-10-flash';
        const lightsNodes = locationNode.querySelectorAll<HTMLElement>(
            '.indexMap__mapLocation10Flash',
        );

        clearTimeout(this.timers[timerId]);

        lightsNodes.forEach((n) => {
            n.classList.remove('_show');
        });

        let current = -1;

        const showLines = () => {
            const max = Math.ceil(lightsNodes.length / 1.5);

            current += 1;

            lightsNodes.forEach((n) => {
                n.classList.remove('_show');
            });

            const thisKey = current % 2;

            lightsNodes.forEach((n, i) => {
                if (thisKey === 0 ? i < 4 : i >= 4) {
                    n.classList.add('_show');
                }
            });

            if (current >= max) {
                current = -1;

                lightsNodes.forEach((n) => {
                    n.classList.add('_show');
                });

                this.timers[timerId] = setTimeout(showLines, 2_000);

                return;
            }

            this.timers[timerId] = setTimeout(showLines, 300);
        };

        showLines();
    }
};

export default location10Animate;
