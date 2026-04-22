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

        let current = 0;
        let loopCount = 0;

        const show = () => {
            const isOdd = Math.ceil(loopCount / 3) % 2 === 1;
            let max = Math.ceil(lightsNodes.length / (isOdd ? 2 : 1));

            if (!isOdd) {
                max = 4;
            }

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

            current += 1;

            if (current >= max) {
                loopCount += 1;
                current = 0;

                // if (isOdd) {
                //     lightsNodes.forEach((n) => {
                //         n.classList.remove('_show');
                //     });
                // }

                this.timers[timerId] = setTimeout(show, isOdd ? 300 : 100);

                return;
            }

            this.timers[timerId] = setTimeout(show, isOdd ? 300 : 100);
        };

        show();
    }

    if (1) {
        const items = locationNode.querySelectorAll<HTMLElement>('.indexMap__mapLocation10Dot');

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

            locationNode.querySelectorAll('.indexMap__mapLocation10Dot._show').forEach((n) => {
                n.classList.remove('_show');
            });

            curs.forEach((cur) => {
                items[cur]?.classList.add('_show');
            });

            prevs.push(...curs);

            this.timers['loc10-2'] = setTimeout(show, 250);
        };

        show();
    }

    if (1) {
        const items = locationNode.querySelectorAll<HTMLElement>('.indexMap__mapLocation10Decor');

        let cur = 0;

        const show = () => {
            locationNode.querySelectorAll('.indexMap__mapLocation10Decor._show').forEach((n) => {
                n.classList.remove('_show');
            });

            items[cur]?.classList.add('_show');

            cur += 1;

            if (cur >= items.length) {
                cur = 0;
            }

            this.timers['loc10-2'] = setTimeout(show, 200);
        };

        show();
    }
};

export default location10Animate;
