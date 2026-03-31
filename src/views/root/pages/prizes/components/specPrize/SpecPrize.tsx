import React from 'react';

import Button from '@components/button/Button.tsx';
import Default from '@components/default/Default.tsx';
import Media from '@components/media/Media.tsx';

import SpecPrizeI from './types.ts';

class SpecPrize extends Default<SpecPrizeI['props'], SpecPrizeI['state']> implements SpecPrizeI {
    parent: SpecPrizeI['parent'];

    constructor(props: SpecPrizeI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { title, text, thumb, mobThumb, name, button } = this.props;

        return (
            <div ref={this.parent} className="prizesPage _FULL _COL _COL_CENTER">
                <div className="prizesPage__head _COL _COL_H_CENTER">
                    <h3 className="prizesPage__headTitle _TITLE _inner">{title}</h3>
                    <p
                        className="prizesPage__headDescription"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </div>
                <div className="prizesPage__content _FULL_W _COL _COL_H_CENTER">
                    <div className="prizesPage__spec">
                        <Media check={(d) => d === 'desktop'}>
                            <img src={thumb} alt="" className="prizesPage__specImage" />
                        </Media>
                        <Media check={(d) => d === 'mobile'}>
                            <img src={mobThumb} alt="" className="prizesPage__specImage" />
                        </Media>
                        <p className="prizesPage__specName">{name}</p>
                    </div>
                </div>
                <div className="prizesPage__button">
                    <Button className="_darkPinkColor _boldBorder" onClick={button.onClick}>
                        {button.text}
                    </Button>
                </div>
            </div>
        );
    }
}

export default SpecPrize;
