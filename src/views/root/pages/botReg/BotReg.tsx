import React from 'react';

import Default from '@components/default/Default.tsx';
import List from '@components/list/List.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import setStep from './methods/setStep.ts';

import BotRegPopupI from './types.ts';

import renderStep from './renders/renderStep.tsx';
import { regSteps } from './static/steps.ts';

class BotRegPopup
    extends Default<BotRegPopupI['props'], BotRegPopupI['state']>
    implements BotRegPopupI
{
    parent: BotRegPopupI['parent'];

    constructor(props: BotRegPopupI['props']) {
        super(props);
        this.state = {
            currentStep: 'form',
        };

        this.parent = React.createRef();
    }

    name = 'botRegPopup' as const;

    setStep = setStep;

    renderStep = renderStep;

    render() {
        const { currentStep, updateListRenderKey } = this.state;

        return (
            <div className="popup _FULL _back">
                <div className="popup__wrapper _FULL">
                    <div className="popup__wrapperBox _notBar">
                        <div className="popup__inner">
                            <div className="popup__innerBox">
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
                                    allItems={Object.keys(regSteps)}
                                    currentItem={currentStep}
                                    resizeWidth={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStore = (s: StoreT) => ({
    device: s.device,
});

export default WithStore(BotRegPopup, mapStore);
