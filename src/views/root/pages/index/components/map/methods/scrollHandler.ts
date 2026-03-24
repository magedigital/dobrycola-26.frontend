import I from '../types.ts';

import { mapSections } from '../static/locations.ts';

const scrollHandler: I['scrollHandler'] = async function () {
    const topBarNode = document.querySelector<HTMLElement>('.topBar');

    if (!topBarNode) {
        return;
    }

    let currentSection: keyof typeof mapSections = 'start';

    (Object.keys(mapSections) as (keyof typeof mapSections)[]).forEach((n) => {
        const sectionNode = this.parent.current!.querySelector<HTMLElement>(
            `.indexMap__mapSection[data-name="${n}"]`,
        );

        if (sectionNode) {
            const thisTop =
                sectionNode.getBoundingClientRect().y -
                topBarNode.offsetHeight -
                document.documentElement.clientHeight / 2;

            if (thisTop < 0) {
                currentSection = n;
            }
        }
    });

    if (currentSection !== this.currentSection) {
        this.currentSection = currentSection;
        await this.asyncSetState({ currentSection });
    }
};

export default scrollHandler;
