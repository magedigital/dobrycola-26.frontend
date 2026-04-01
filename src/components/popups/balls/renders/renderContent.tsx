import React from 'react';

import Button from '@components/button/Button.tsx';
import Table from '@components/table/Table.tsx';

import I from '../types.ts';

import { ballsTableCols } from '../static/table.ts';

const renderContent: I['renderContent'] = function (this: I) {
    const { profileData } = this.props;
    const items = (profileData?.transactions || []).map((item, key) => ({
        id: key.toString(),
        ...item,
    }));

    return (
        <div className="popup__innerBox _block">
            <div className="popup__head _COL _COL_H_CENTER">
                <div className="popup__title">Накопленные баллы</div>
            </div>
            <div className="popup__table _COL _COL_H_CENTER">
                <Table
                    name="balls"
                    rows={items}
                    cols={ballsTableCols}
                    render={this.renderTableCol.bind(this)}
                    renderEmpty={this.renderTableEmpty.bind(this)}
                    emptyId="all"
                />
            </div>
            <div className="popup__buttons _ROW">
                <div className="popup__button">
                    <Button onClick={this.close.bind(this)} className="_boldBorder _darkPinkColor">
                        окей
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default renderContent;
