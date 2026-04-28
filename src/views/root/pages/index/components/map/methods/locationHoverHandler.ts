import { appStore } from '@store/store.tsx';

import I from '../types.ts';

const locationHoverHandler: I['locationHoverHandler'] = function (k, action) {
    if (appStore.getState().device === 'mobile') {
        return;
    }

    const locationNode = this.parent.current!.querySelector<HTMLElement>(
        `.indexMap__mapLocation[data-location="${k}"]`,
    );

    if (!locationNode) {
        return;
    }

    const linesNodes = locationNode.querySelectorAll<HTMLElement>('.indexMap__mapLocationLine');
    const timerId = `line-${k}`;

    clearTimeout(this.timers[timerId]);

    linesNodes.forEach((n) => {
        n.classList.remove('_show');
    });

    if (action === 'leave') {
        return;
    }

    let current = 0;

    const showLines = (remove?: boolean) => {
        if (!linesNodes[current]) {
            return;
        }

        linesNodes[current].classList[remove ? 'remove' : 'add']('_show');
        current += 1;

        if (current >= linesNodes.length) {
            this.timers[timerId] = setTimeout(() => {
                current = 0;
                showLines(!remove);
            }, 150);

            return;
        }

        this.timers[timerId] = setTimeout(showLines.bind(null, remove), 30);
    };

    showLines();
};

export default locationHoverHandler;
