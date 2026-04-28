import Phone from '@services/phone/Phone.service.ts';

import I from '../types.ts';

const getUserData: I['getUserData'] = function () {
    const { authUser, storePages } = this.props;
    const data: Partial<Record<string, string>> = {};
    const anketPageData = storePages.fullAnket.data;

    if (authUser.extraDataRequired) {
        Object.keys(authUser.extraDataRequired).forEach((name) => {
            const field = authUser.extraDataRequired![name];

            if (typeof field.value === 'string') {
                data[name] = field.value;

                if (name === 'phone') {
                    data[name] = new Phone().format(field.value);
                }
            }

            if (field.type === 'photo') {
                data[name] = typeof field.value === 'string' ? field.value : field.value?.name;
            }
        });
    }

    if (anketPageData) {
        Object.keys(anketPageData).forEach((k) => {
            data[k] = anketPageData[k];
        });
    }

    return data;
};

export default getUserData;
