import React from 'react';

import List from '@components/list/List.tsx';

import I from '../types.ts';

import { prizeOrderFormSteps } from '../static/steps.ts';

const renderContent: I['renderContent'] = function (this: I) {
    const { currentStep, updateListRenderKey, prize } = this.state;

    return (
        <div className="popup__innerBox">
            {prize && (
                <List
                    renderKey={[currentStep, updateListRenderKey].join('')}
                    items={[{ _id: currentStep }]}
                    parentClass="popup__steps"
                    itemClass="popup__stepsItem"
                    itemStyleProps={[]}
                    parentStyleProps={['width']}
                    parentRealStyleProps={['width']}
                    render={({ item }) => ({
                        item: this.renderStep(item._id),
                    })}
                    allItems={Object.keys(prizeOrderFormSteps)}
                    currentItem={currentStep}
                    resizeWidth={true}
                    callback={() => {
                        this.resizeHandler();
                    }}
                />
            )}
        </div>
    );
};

export default renderContent;
