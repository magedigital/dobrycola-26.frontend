import I from '../types.ts';

const getSliderItems: I['getSliderItems'] = function () {
    const { mainContent } = this.props;

    return mainContent.components.anounce.carousel.thumbs.map((t) => ({ thumb: t }));
};

export default getSliderItems;
