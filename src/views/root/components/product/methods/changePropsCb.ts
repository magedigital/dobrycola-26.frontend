import I from '../types.ts';

const changePropsCb: I['changePropsCb'] = async function (this: I, p) {
    if (p === 'canSlider') {
        this.checkSlider();
    }
};

export default changePropsCb;
