import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { isComplete, isResult, isStart } = this.state;
    const { authUser } = this.props;

    return (
        <div
            className={this.getClass(
                'raffle',
                isStart && '_start',
                isComplete && '_complete',
                isResult && '_result',
                authUser && '_auth',
            )}
        >
            {this.renderHead()}
            {/* {this.renderFires()} */}
            <div className="raffle__inner">
                {this.renderSlider()}
                {this.renderSpinner()}
                {this.renderStartForm()}
                {this.renderResultForm()}
            </div>
        </div>
    );
};

export default renderContent;
