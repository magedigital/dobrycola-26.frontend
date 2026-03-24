import React from 'react';

import Button from '@components/button/Button.tsx';
import Table from '@components/table/Table.tsx';

import I from '../types.ts';

import { winnerTableCols } from '../static/table.ts';

const renderTable: I['renderTable'] = function () {
    const { limit } = this.state;
    const allWinners = this.getWinnersList();
    const hasMore = allWinners.length > limit;
    const winners = allWinners.filter((w, i) => i < limit);

    return (
        <div className="winners__table">
            <div className="winners__tableInner">
                <Table
                    name="winners"
                    rows={winners}
                    cols={winnerTableCols}
                    render={this.renderTableCol.bind(this)}
                    isMobRows={true}
                />
            </div>
            {hasMore && (
                <div className="winners__tableButton">
                    <Button
                        className="_whiteColor"
                        onClick={() => {
                            this.setState({ limit: limit + this.step });
                        }}
                    >
                        показать ещё
                    </Button>
                </div>
            )}
        </div>
    );
};

export default renderTable;
