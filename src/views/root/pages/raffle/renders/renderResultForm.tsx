import React from 'react';

import Button from '@components/button/Button.tsx';
import { appStore } from '@store/store.tsx';

import I from '../types.ts';

const renderResultForm: I['renderResultForm'] = function () {
    const { loadingKey } = this.state;
    const { authUser } = this.props;

    return (
        <div className="raffle__resultForm _COL">
            {authUser ? (
                <>
                    <div className="raffle__resultFormInfo">
                        <h4 className="raffle__resultFormInfoTitle">Чтобы получить приз:</h4>
                        <p className="raffle__resultFormInfoText _center">
                            Зарегистрируй код под крышкой (можно позже)
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className="raffle__resultFormInfo">
                        <h4 className="raffle__resultFormInfoTitle">Чтобы получить приз:</h4>
                        <p className="raffle__resultFormInfoText _list">
                            Зарегистрируйся в Акции сейчас
                        </p>
                        <p className="raffle__resultFormInfoText _list">
                            Зарегистрируй код под крышкой (можно позже)
                        </p>
                    </div>
                    {/* <div className="raffle__resultFormField">
                        <Input
                            className="_rafflePrize"
                            support="Введи Email для регистрации"
                            value={login || ''}
                            name="email"
                            onChange={async ({ value }) => {
                                await setAsyncState.call(this, { login: value });
                            }}
                        />
                    </div> */}
                    <div className="raffle__resultFormButton">
                        <Button
                            className="_purpleColor _boldBorder"
                            onClick={() => {
                                appStore.getState().setPopup({ name: 'regPopup' });
                                // changePage({ pageName: 'auth-reg', query: { raffle: 'true' } });
                            }}
                            loading={loadingKey === 'reg'}
                        >
                            Зарегистрироваться
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default renderResultForm;
