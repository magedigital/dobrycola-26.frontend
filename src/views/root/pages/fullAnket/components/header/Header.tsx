import React from 'react';

import Default from '@components/default/Default.tsx';
import Form from '@components/form/Form.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import getFields from './methods/getFields.tsx';
import getUserData from './methods/getUserData.ts';
import sendForm from './methods/sendForm.ts';
import uploadFile from './methods/uploadFile.ts';

import HeaderI from './types.ts';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    getUserData = getUserData;
    getFields = getFields;

    uploadFile = uploadFile;
    sendForm = sendForm;

    render() {
        const userData = this.getUserData();

        return (
            <div ref={this.parent} className="anketHeader _SECTION">
                <div className="anketHeader__inner _INNER">
                    <div className="anketHeader__head _COL">
                        <h1 className="anketHeader__headTitle _TITLE">АНКЕТА</h1>
                        <p className="anketHeader__headText _TITLE _sub _inner">
                            Для получения приза заполните все поля и&nbsp;приложите необходимые
                            документы
                        </p>
                    </div>
                    <div className="anketHeader__content">
                        <Form
                            data={userData}
                            fieldsKey={Object.keys(userData)
                                .sort()
                                .map((k) => userData[k])
                                .filter((t) => t)
                                .join('')}
                            fields={this.getFields()}
                            button={{ text: 'сохранить данные', className: '_purpleColor' }}
                            request={this.sendForm.bind(this)}
                            uploadFile={this.uploadFile.bind(this)}
                            fieldClassName="_"
                            requiredText="* обязательные поля"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStore = (s: StoreT) => ({
    storePages: s.pages,
});

export default WithStore(Header, mapStore);
