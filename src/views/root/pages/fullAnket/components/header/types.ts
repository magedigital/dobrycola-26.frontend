import UserT from '@api/entities/User';
import DefaultI from '@components/default/types';
import { FieldT } from '@components/field/types';
import { StoreT } from '@store/store';

type PropsT = {
    authUser: UserT;
    storePages:StoreT['pages']
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {
    getUserData(this: HeaderI): Partial<Record<string, string>>;
    getFields(this: HeaderI): Record<string, FieldT>;

    uploadFile(this: HeaderI, d: { file: File; name: string }): Promise<void>;
    sendForm(this: HeaderI, d: Partial<Record<string, string>>): Promise<void>;
}

export default HeaderI;
