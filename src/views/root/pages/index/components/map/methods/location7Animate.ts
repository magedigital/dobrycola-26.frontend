import I from '../types.ts';

const location7Animate: I['location7Animate'] = function () {
    const locationNode = this.parent.current!.querySelector<HTMLElement>(
        `.indexMap__mapLocation[data-location="7"]`,
    );

    if (!locationNode) {
        return;
    }

    const grid1Node = locationNode.querySelector<HTMLElement>('.indexMap__mapLocation7Grid._1');
    const grid2Node = locationNode.querySelector<HTMLElement>('.indexMap__mapLocation7Grid._2');

    if (grid1Node) {
        const grid1NodeItems = grid1Node.querySelectorAll<HTMLElement>(
            '.indexMap__mapLocation7GridItem',
        );

        let prev1: number | undefined;
        let prev2: number | undefined;

        const check = (t1: number, t2: number): boolean =>
            t1 === t2 ||
            t1 === t2 - 1 ||
            t1 === t2 + 1 ||
            t1 === t2 + 6 ||
            t1 === t2 + 6 + 1 ||
            t1 === t2 + 6 - 1 ||
            t1 === t2 - 6 ||
            t1 === t2 - 6 + 1 ||
            t1 === t2 - 6 - 1;

        const show = () => {
            let cur1: number | undefined;
            let cur2: number | undefined;

            while (cur1 === undefined || cur1 === prev1) {
                cur1 = Math.round(Math.random() * (grid1NodeItems.length - 1));
            }

            while (cur2 === undefined || check(cur2, cur1) || cur2 === prev2) {
                cur2 = Math.round(Math.random() * (grid1NodeItems.length - 1));
            }

            grid1Node.querySelectorAll('.indexMap__mapLocation7GridItem._show').forEach((n) => {
                n.classList.remove('_show');
            });

            grid1NodeItems[cur1]?.classList.add('_show');
            grid1NodeItems[cur2]?.classList.add('_show');

            prev1 = cur1;
            prev2 = cur2;

            this.timers['loc7-1'] = setTimeout(show, 150);
        };

        show();
    }

    if (grid2Node) {
        const items = grid2Node.querySelectorAll<HTMLElement>('.indexMap__mapLocation7GridItem');

        let prev1: number | undefined;
        let prev2: number | undefined;

        const check = (t1: number, t2: number): boolean =>
            t1 === t2 ||
            t1 === t2 - 1 ||
            t1 === t2 + 1 ||
            t1 === t2 + 6 ||
            t1 === t2 + 6 + 1 ||
            t1 === t2 + 6 - 1 ||
            t1 === t2 - 6 ||
            t1 === t2 - 6 + 1 ||
            t1 === t2 - 6 - 1;

        const show = () => {
            let cur1: number | undefined;
            let cur2: number | undefined;

            while (cur1 === undefined || cur1 === prev1) {
                cur1 = Math.round(Math.random() * (items.length - 1));
            }

            while (cur2 === undefined || check(cur2, cur1) || cur2 === prev2) {
                cur2 = Math.round(Math.random() * (items.length - 1));
            }

            grid2Node.querySelectorAll('.indexMap__mapLocation7GridItem._show').forEach((n) => {
                n.classList.remove('_show');
            });

            items[cur1]?.classList.add('_show');
            items[cur2]?.classList.add('_show');

            prev1 = cur1;
            prev2 = cur2;

            this.timers['loc7-2'] = setTimeout(show, 150);
        };

        show();
    }

    const lights = locationNode.querySelectorAll<HTMLElement>('.indexMap__mapLocation7Light');
    let prev: number | undefined;

    const show = () => {
        let cur;

        while (cur === undefined || cur === prev) {
            cur = Math.round(Math.random() * (lights.length - 1));
        }

        lights[prev!]?.classList.remove('_show');
        lights[cur].classList.add('_show');

        prev = cur;

        this.timers['loc7-lights'] = setTimeout(show, 300);
    };

    show();
};

export default location7Animate;
