import React from 'react';

import Default from '@components/default/Default.tsx';
import Media from '@components/media/Media.tsx';

import AppI from './types.ts';

class App extends Default<AppI['props'], AppI['state']> implements AppI {
    parent: AppI['parent'];

    constructor(props: AppI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { mainContent } = this.props;

        return (
            <div ref={this.parent} className="indexApp _SECTION">
                <div className="indexApp__inner _INNER">
                    <div className="indexApp__content">
                        <div className="indexApp__head _COL">
                            <h3 className="indexApp__title">Установи мобильное приложение</h3>
                            <p className="indexApp__subTitle">и будь в курсе всех новых акций</p>
                        </div>
                        <div className="indexApp__info">
                            <Media check={(d) => d === 'desktop'}>
                                <>
                                    <a
                                        href={mainContent.components.app.qr.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="indexApp__infoQr"
                                    >
                                        <img
                                            src={mainContent.components.app.qr.thumb}
                                            alt=""
                                            className="indexApp__infoQrThumb"
                                        />
                                    </a>
                                    <p className="indexApp__infoText">
                                        Отсканируй QR-код
                                        <br />
                                        для загрузки
                                        <br />
                                        приложения
                                    </p>
                                </>
                            </Media>
                            <Media check={(d) => d === 'mobile'}>
                                <>
                                    <a
                                        href={mainContent.components.app.qr.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="indexApp__infoText"
                                    >
                                        Скачай
                                        <br />
                                        приложение
                                    </a>
                                </>
                            </Media>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
