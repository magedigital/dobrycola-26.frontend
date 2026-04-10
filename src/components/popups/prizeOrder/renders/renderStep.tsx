import React from 'react';

import Final from '../components/final/Final.tsx';
import Start from '../components/start/Start.tsx';

import I from '../types.ts';

const renderStep: I['renderStep'] = function (id) {
    const {prize} = this.state;

    return (
        <div className="popup__step">
            {id === 'start' && (
                <Start prize={prize!} close={this.close.bind(this)} setStep={this.setStep.bind(this)} />
            )}
            {id === 'final' && (
                <Final prize={prize!} close={this.close.bind(this)} setStep={this.setStep.bind(this)} />
            )}
        </div>
    );
};

export default renderStep;
