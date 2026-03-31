import React from 'react';

import I from '../types.ts';

const renderRaffle: I['renderRaffle'] = function () {
    const { inProcess, isComplete, prizes } = this.state;

    return (
        <div
            className={this.getClass(
                'popup__raffle _FULL_W _COL _COL_H_CENTER',
                prizes && '_ready',
                inProcess && '_process',
                isComplete && '_complete',
            )}
        >
            {this.renderStart()}
            {this.renderDecors()}
            {this.renderPrizes()}
            <div className="popup__raffleBack" />
        </div>
    );
};

export default renderRaffle;
