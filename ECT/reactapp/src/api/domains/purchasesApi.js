import { purchasesUrl } from '../../const.js';
import { purchaseSerializerList } from '../serializers/purchaseSerializerList.js';
import { purchaseSerializer } from '../serializers/purchaseSerializer.js';
import { get, put, post, postFile, del } from '../general/base.js';

//url: baseApi/purchasesUrl/
//url: baseApi/purchasesUrl/page/{page}/
//url: baseApi/purchasesUrl/page/{page}/{filter}/

export const getAllPurchases = async (page, filter) => {
    const response = await get(`${purchasesUrl}${page? `page/${page}/` : ''}${filter? `${filter}/` : ''}`)
    let mock = [{commodity: [{}, {}, {}]}, {commodity: [{}, {}, {}]}, {commodity: [{}, {}, {}]}]
    console.log(purchaseSerializerList(mock));
    return purchaseSerializerList(mock);
};

//url: baseApi/purchasesUrl/{id}
export const getPurchase = async (id) => {
    const response = await get(`${purchasesUrl}${id}`);
    let mock = {commodity: [{}, {}, {}]};
    console.log(purchaseSerializer(mock));
    return purchaseSerializer(mock);
};
