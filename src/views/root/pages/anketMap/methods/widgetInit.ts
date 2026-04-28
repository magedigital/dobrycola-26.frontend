import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';

const widgetInit: I['widgetInit'] = async function () {
    const { storePages } = this.props;
    const fivepost = window.fivepost;

    this.fivepost = new fivepost.PickupPointsMap({
        apikey: '8ec9eb6f-7c2f-42c0-8497-ea694df5edd6',
        target: '#map',
        serchFilter: false,
        onSelectPoint: (point: { id: string; fullAddress: string }) => {
            AppRouter.changePage({
                pageName: 'fullAnket',
                pageData: {
                    ...storePages.anketMap.data,
                    pointId: point.id,
                    pointAddress: point.fullAddress,
                },
            });
        },
        onLoadYandexApi: () => undefined,
        onInit: () => undefined,
        onCancel: (point: any) => {
            console.log('canceled', point);
        },
    });
};

export default widgetInit;
