import { API } from '@api/api';
import request from '@utils/request';

async function reg({ code }: { code: string }): Promise<void> {
    await request({
        method: 'POST',
        url: API.CODE.REG,
        data: { code, interface: 'site' },
    });
}

export const codeRequests = {
    reg,
};
