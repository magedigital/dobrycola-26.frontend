import React from 'react';

import Button from '@components/button/Button.tsx';
import Editor from '@components/editor/Editor.tsx';

import init from './methods/init.ts';
import sendForm from './methods/sendForm.ts';

import StartI from './types.ts';

class Start extends Editor<StartI['props'], StartI['state']> implements StartI {
    parent: StartI['parent'];

    constructor(props: StartI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;
    sendForm = sendForm;

    render() {
        const { form, loadingKey } = this.state;
        const { close, prize } = this.props;

        if (!form) {
            return;
        }

        return (
            <>
                <div className="popup__head _COL _COL_H_CENTER">
                    <div className="popup__title">заказ приза</div>
                </div>
                <div className="popup__prizeOrder">
                    <div className="popup__prizeOrderCard">
                        <div className="popup__prizeOrderCardHead">
                            <img src={prize.thumb} alt="" className="popup__prizeOrderCardThumb" />
                        </div>
                        <p className="popup__prizeOrderCardTitle">{prize.title}</p>
                    </div>
                    <div className="popup__prizeOrderInfo">с тебя будет списано {prize.price}</div>
                </div>
                <div className="popup__buttons _ROW">
                    <div className="popup__button _fix">
                        <Button onClick={close} className="_boldBorder _darkPinkColor">
                            не хочу
                        </Button>
                    </div>
                    <div className="popup__button _fix">
                        <Button
                            onClick={this.sendForm.bind(this)}
                            className="_boldBorder _purpleColor"
                            loading={loadingKey === 'send'}
                        >
                            подтверждаю
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

export default Start;
