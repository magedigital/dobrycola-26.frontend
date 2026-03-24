import React from 'react';

import Default from '@components/default/Default.tsx';
import StringService from '@services/string/String.service.ts';

import FooterI from './types.ts';

class Footer extends Default<FooterI['props'], FooterI['state']> implements FooterI {
    parent: FooterI['parent'];

    constructor(props: FooterI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className="footer">
                <div className="footer__wrapper _SECTION">
                    <div className="footer__inner _INNER">
                        <div className="footer__nav">
                            <div className="footer__navBlock">
                                <div className="footer__navLink _CLICK">ПРАВИЛА АКЦИИ</div>
                                <div className="footer__navLink _CLICK">ОБРАТНАЯ СВЯЗЬ</div>
                            </div>
                            <div className="footer__navBlock">
                                <div className="footer__navLink _CLICK">
                                    Политика в отношении обработки персональных данных
                                </div>
                                <div className="footer__navLink _CLICK">
                                    Пользовательское соглашение
                                </div>
                            </div>
                        </div>
                        <p
                            className="footer__text"
                            dangerouslySetInnerHTML={{
                                __html: new StringService().setSpaces(
                                    'Общий срок проведения Акции с 01.04.2026 по 15.10.2026. Подробная информация об организаторе Акции, правилах ее проведения, количестве призов по результатам Акции, сроках, месте и порядке их получения указана на сайте dobrycola-promo.ru. Внешний вид товара и призов может отличаться от изображения в рекламных материалах. Pop&nbsp;sound – Звук в стиле поп-музыки. K-pop sound – Звук в стиле корейской поп-музыки. ',
                                ),
                            }}
                        ></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
