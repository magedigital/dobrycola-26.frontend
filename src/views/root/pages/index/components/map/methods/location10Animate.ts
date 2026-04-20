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

        let prev1: number | undefined;
        let prev2: number | undefined;
        let prev3: number | undefined;

        const show = () => {
            let cur1: number | undefined;
            let cur2: number | undefined;
            let cur3: number | undefined;

            while (cur1 === undefined || cur1 === prev1 || cur1 === prev2 || cur1 === prev3) {
                cur1 = Math.round(Math.random() * (items.length - 1));
            }

            while (
                cur2 === undefined ||
                cur2 === cur1 ||
                cur2 === prev1 ||
                cur2 === prev2 ||
                cur2 === prev3
            ) {
                cur2 = Math.round(Math.random() * (items.length - 1));
            }

            while (
                cur3 === undefined ||
                cur3 === cur1 ||
                cur3 === cur2 ||
                cur3 === prev1 ||
                cur3 === prev2 ||
                cur3 === prev3
            ) {
                cur3 = Math.round(Math.random() * (items.length - 1));
            }

            locationNode.querySelectorAll('.indexMap__mapLocation10Dot._show').forEach((n) => {
                n.classList.remove('_show');
            });

            items[cur1]?.classList.add('_show');
            items[cur2]?.classList.add('_show');
            items[cur3]?.classList.add('_show');

            prev1 = cur1;
            prev2 = cur2;
            prev3 = cur3;

            this.timers['loc10-2'] = setTimeout(show, 250);
        };

        show();
    }
};

export default location10Animate;
