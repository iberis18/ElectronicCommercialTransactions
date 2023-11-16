import { PURCHASES_URL } from '../../const.js';
import { purchaseSerializerList } from '../serializers/purchaseSerializerList.js';
import { purchaseSerializer } from '../serializers/purchaseSerializer.js';
import { get, put, post, postFile, del } from '../general/base.js';

//url: baseApi/purchasesUrl/
//url: baseApi/purchasesUrl/page/{page}/
//url: baseApi/purchasesUrl/page/{page}/{filter}/

export const getAllPurchases = async (page, filter) => {
  const response = await get(`${PURCHASES_URL}${page? `page/${page}/` : ''}${filter? `${filter}/` : ''}`)
  let mock = [{commodity: [{}, {}, {}]}, {commodity: [{}, {}, {}]}, {commodity: [{}, {}, {}]}]
  return purchaseSerializerList(mock);
};

//url: baseApi/purchasesUrl/{id}
export const getPurchase = async (id) => {
  const response = await get(`${PURCHASES_URL}${id}`);
  let mock = {commodity: [{}, {}, {}]};
  return purchaseSerializer(mock);
};
