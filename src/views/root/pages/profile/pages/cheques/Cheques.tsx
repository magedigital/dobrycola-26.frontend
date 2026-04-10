import React from 'react';

import Button from '@components/button/Button.tsx';
import Default from '@components/default/Default.tsx';
import List from '@components/list/List.tsx';
import Media from '@components/media/Media.tsx';
import Table from '@components/table/Table.tsx';
import StringService from '@services/string/String.service.ts';

import Prizes from './components/prizes/Prizes.tsx';

import codeMoreHandler from './methods/codeMoreHandler.ts';

import ChequesI from './types.ts';

import { AppRouter } from '../../../../../../index.tsx';
import renderTableCol from './renders/renderTableCol.tsx';
import renderTableEmpty from './renders/renderTableEmpty.tsx';
import { chequesTableCols } from './static/table.ts';

class Cheques extends Default<ChequesI['props'], ChequesI['state']> implements ChequesI {
    parent: ChequesI['parent'];

    constructor(props: ChequesI['props']) {
        super(props);
        this.state = {
            currentCodesCount: 10,
        };
        this.parent = React.createRef();
    }

    codeMoreHandler = codeMoreHandler;

    renderTableCol = renderTableCol;
    renderTableEmpty = renderTableEmpty;

    render() {
        const { currentCodesCount } = this.state;
        const { setRenderKey, data, content } = this.props;
        const allChecks = data?.checks || [];
        const checks = allChecks
            .map((item) => ({
                ...item,
                _id: item.id,
            }))
            .filter((item, key) => key < currentCodesCount);
        const hasMore = allChecks.length > currentCodesCount;

        return (
            <>
                <div className="profile__block _codes _FULL_W _COL _COL_H_CENTER">
                    <div className="profile__blockHead _COL _COL_H_CENTER">
                        <h3 className="profile__blockTitle _TITLE _profile">
                            МОИ Чеки из «Пятёрочки»
                        </h3>
                        <Media check={(d) => d === 'desktop'}>
                            <div className="profile__blockButton">
                                <Button
                                    className="_redColor _boldBorder _minSize"
                                    onClick={() => {
                                        AppRouter.changePage({ pageName: '5ka' });
                                    }}
                                >
                                    перейти на страницу акции
                                </Button>
                            </div>
                        </Media>
                    </div>
                    <div className="profile__blockTable _FULL_W">
                        <Table
                            name="cheques"
                            render={this.renderTableCol.bind(this)}
                            rows={checks}
                            cols={chequesTableCols}
                            renderListCb={setRenderKey}
                            renderEmpty={this.renderTableEmpty.bind(this)}
                            emptyId="empty"
                            isMobRows={true}
                        />
                    </div>
                    <List
                        renderKey={`${!!hasMore}`}
                        items={hasMore ? [{ _id: 'button' }] : []}
                        parentClass="profile__blockDynamicButtonWrapper"
                        itemStyleProps={[]}
                        parentStyleProps={['width']}
                        parentRealStyleProps={['width']}
                        render={() => ({
                            item: (
                                <div className="profile__blockDynamicButton">
                                    <Button
                                        className="_purpleEmpty"
                                        onClick={this.codeMoreHandler.bind(this)}
                                    >
                                        Показать еще
                                    </Button>
                                </div>
                            ),
                        })}
                        resizeWidth={true}
                        callback={setRenderKey}
                    />
                </div>
                <div className="profile__block _codes _FULL_W _COL _COL_H_CENTER">
                    <div className="profile__blockHead _COL _COL_H_CENTER">
                        <h3 className="profile__blockTitle _TITLE _profile">
                            закажи <br className="_MOBILE" />
                            за принятые чеки
                        </h3>
                        <p className="profile__blockDescription _sub">
                            У тебя <span>{data?.checkBalance}</span> непотраченных{' '}
                            {new StringService().getEndText(data?.checkBalance, [
                                'чек',
                                'чека',
                                'чеков',
                            ])}
                        </p>
                    </div>
                    <div className="profile__blockPrizes">
                        <Prizes items={content.components.extra5ka.prizes} />
                    </div>
                </div>
            </>
        );
    }
}

export default Cheques;
