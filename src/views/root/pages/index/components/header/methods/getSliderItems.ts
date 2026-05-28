import I from '../types.ts';

const getSliderItems: I['getSliderItems'] = function () {
    const { mainContent } = this.props;

    if (mainContent.components.anounce.carousel.thumbsExtra.length === 0) {
        return mainContent.components.anounce.carousel.thumbs.map((t) => ({
            thumb: t,
            title: '',
        }));
    }

    return mainContent.components.anounce.carousel.thumbsExtra.map((t) => ({
        thumb: t[0],
        title: t[1],
    }));
};

export default getSliderItems;
