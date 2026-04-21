import I from '../types.ts';

const location13Animate: I['location13Animate'] = function () {
    const locationNode = this.parent.current!.querySelector<HTMLElement>(
        `.indexMap__mapLocation[data-location="13"]`,
    );

    if (!locationNode) {
        return;
    }

    if (1) {
        const items = locationNode.querySelectorAll<HTMLElement>('.indexMap__mapLocation13Dot');

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

            locationNode.querySelectorAll('.indexMap__mapLocation13Dot._show').forEach((n) => {
                n.classList.remove('_show');
            });

            curs.forEach((cur) => {
                items[cur]?.classList.add('_show');
            });

            prevs.push(...curs);

            this.timers['loc-13'] = setTimeout(show, 250);
        };

        show();
    }
};

export default location13Animate;
