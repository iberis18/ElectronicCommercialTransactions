import { purchasesUrl } from '../../const.js';
import { purchasesSerializer } from '../serializers/purchasesSerializer.js';
import { get, put, post, postFile, del } from '../general/base.js';

export const getPurchases = async () => {
    const response = await get(purchasesUrl);
    return purchasesSerializer(response);
};