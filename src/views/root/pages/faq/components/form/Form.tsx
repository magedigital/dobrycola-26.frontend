import React from 'react';

import Default from '@components/default/Default.tsx';
import Form from '@components/form/Form.tsx';

import sendForm from './methods/sendForm.ts';

import FormI from './types.ts';

import { faqFields } from './static/fields.tsx';

class FaqForm extends Default<FormI['props'], FormI['state']> implements FormI {
    parent: FormI['parent'];

    constructor(props: FormI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    sendForm = sendForm;

    render() {
        const { disabled } = this.props;

        return (
            <div ref={this.parent} className="faqForm _SECTION">
                <div className="faqForm__inner _COL">
                    <h3 className="faqForm__title">
                        Если вы не нашли ответ
                        <br />
                        на свой вопрос, напишите нам:
                    </h3>
                    <div className="faqForm__form">
                        <Form
                            fields={faqFields}
                            button={{ text: 'отправить', className: '_darkPinkColor _boldBorder' }}
                            request={this.sendForm.bind(this)}
                            disabled={disabled}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default FaqForm;
