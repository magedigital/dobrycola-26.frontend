import I from '../types.ts';

const getSliderItems: I['getSliderItems'] = function () {
    return [
        { thumb: require('@media/prize-test-1.png') },
        { thumb: require('@media/prize-test-2.png') },
        { thumb: require('@media/prize-test-3.png') },
    ];
};

export default getSliderItems;
