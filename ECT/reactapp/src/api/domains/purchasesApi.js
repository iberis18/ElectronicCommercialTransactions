import { purchasesUrl } from '../../const.js';
import { purchaseSerializerList } from '../serializers/purchaseSerializerList.js';
import { get, put, post, postFile, del } from '../general/base.js';

export const getPurchases = async () => {
    const response = await get(purchasesUrl);
    let mock = [{commodity: [{}, {}, {}]}, {commodity: [{}, {}, {}]}, {commodity: [{}, {}, {}]}]
    console.log(purchaseSerializerList(mock));
    return purchaseSerializerList(mock);
};