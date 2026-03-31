import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    await this.scrollHandler();

    const pageScrollNode = this.parent.current!.closest<HTMLElement>('.page__scroll');

    if (pageScrollNode) {
        pageScrollNode.addEventListener('scroll', this.scrollHandler);

        this.unmountHandlers.all = () => {
            pageScrollNode.removeEventListener('scroll', this.scrollHandler);
        };
    }

    if (window.location.search.includes('ancor=games')) {
        this.scrollToSection('game', 0);
    }
};

export default init;
