import scrollToBlock from '@utils/scrollToBlock.ts';

import I from '../types.ts';

const scrollToSection: I['scrollToSection'] = function (section, d) {
    const topBarNode = document.querySelector<HTMLElement>('.topBar');
    const pageScrollNode = this.parent.current!.closest<HTMLElement>('.page__scroll');
    const sectionNode = this.parent.current!.querySelector<HTMLElement>(
        `.indexMap__mapSection[data-name="${section}"]`,
    );

    if (!topBarNode || !pageScrollNode || !sectionNode) {
        return;
    }

    scrollToBlock({
        blockNode: sectionNode,
        scrollNode: pageScrollNode,
        dir: 'top',
        offset: -topBarNode.offsetHeight * 1.2,
        duration: d ?? 300,
    });
};

export default scrollToSection;
