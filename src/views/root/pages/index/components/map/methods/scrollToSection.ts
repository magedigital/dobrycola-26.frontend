import scrollToBlock from '@utils/scrollToBlock.ts';

import I from '../types.ts';

const scrollToSection: I['scrollToSection'] = function (section) {
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
        dir: section === 'start' ? 'top' : undefined,
        offset: -topBarNode.offsetHeight,
    });
};

export default scrollToSection;
