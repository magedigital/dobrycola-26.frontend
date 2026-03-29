import React from 'react';

import Button from '@components/button/Button.tsx';
import List from '@components/list/List.tsx';
import Table from '@components/table/Table.tsx';

import I from '../types.ts';

import { codeTableCols } from '../static/table.ts';

const renderCodes: I['renderCodes'] = function () {
    const { currentCodesCount } = this.state;
    const { data, setRenderKey } = this.props;
    const allCodes = data?.codes || [];
    const codes = allCodes
        .map((item) => ({
            id: item.code,
            ...item,
        }))
        .filter((item, key) => key < currentCodesCount);
    const hasMore = allCodes.length > currentCodesCount;

    return (
        <div className="profile__block _codes _FULL_W _COL _COL_H_CENTER">
            <div className="profile__blockHead _COL _COL_H_CENTER">
                <h3 className="profile__blockTitle _TITLE _profile">МОИ КОДЫ</h3>
                <p className="profile__blockDescription">
                    Каждый код даёт шанс <br className="_MOBILE" />
                    на участие в розыгрыше
                </p>
            </div>
            <div className="profile__blockTable _FULL_W">
                <Table
                    name="codes"
                    rows={codes}
                    cols={codeTableCols}
                    render={this.renderTableCol.bind(this)}
                    renderEmpty={this.renderTableEmpty.bind(this)}
                    renderListCb={setRenderKey}
                    emptyId="all"
                />
            </div>
            {false && (
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
                />
            )}
        </div>
    );
};

export default renderCodes;
