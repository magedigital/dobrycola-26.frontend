import I from '../types.ts';

const location18Animate: I['location18Animate'] = function () {
    const locationNode = this.parent.current!.querySelector<HTMLElement>(
        `.indexMap__mapLocation[data-location="18"]`,
    );

    if (!locationNode) {
        return;
    }

    if (1) {
        const items = locationNode.querySelectorAll<HTMLElement>('.indexMap__mapLocation18BallDot');

        let prevs: number[] = [];

        const show = () => {
            const curs: number[] = [];

            [1, 2, 3, 4, 5].forEach(() => {
                let cur: number | undefined;

                while (cur === undefined || prevs.includes(cur)) {
                    cur = Math.round(Math.random() * (items.length - 1));
                }

                curs.push(cur);
            });

            prevs = [];

            locationNode.querySelectorAll('.indexMap__mapLocation18BallDot._show').forEach((n) => {
                n.classList.remove('_show');
            });

            curs.forEach((cur) => {
                items[cur]?.classList.add('_show');
            });

            prevs.push(...curs);

            this.timers['loc-18-dots'] = setTimeout(show, 250);
        };

        show();
    }

    if (1) {
        const timerId = 'lights-18-light';
        const lightsNodes = locationNode.querySelectorAll<HTMLElement>(
            '.indexMap__mapLocation18Light',
        );

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
    }

    const timerId = 'lights-18';
    const lightsNodes = locationNode.querySelectorAll<HTMLElement>('.indexMap__mapLocation18Dot');

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

            this.timers[timerId] = setTimeout(showLines, 120);

            return;
        }

        this.timers[timerId] = setTimeout(showLines, 120);
    };

    showLines();
};

export default location18Animate;
