import I from '../types.ts';

const setProducts: I['setProducts'] = async function (products) {
    await this.asyncSetState({ products });
};

export default setProducts;
