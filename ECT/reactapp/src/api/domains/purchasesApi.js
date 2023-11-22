import { PURCHASES_URL, STAGES_ID } from '../../const.js';
import { purchaseSerializerList } from '../serializers/purchaseSerializerList.js';
import { purchaseSerializer } from '../serializers/purchaseSerializer.js';
import { get, put, post, postFile, del } from '../general/base.js';

//url: baseApi/purchasesUrl/
//url: baseApi/purchasesUrl/page/{page}/

// export const getAllPurchases = async (page) => {
//   const response = await get(`${PURCHASES_URL}${page? `page/${page}/` : ''}`);
//   let mock = [{commodity: [{}, {}, {}]}, {commodity: [{}, {}, {}]}, {commodity: [{}, {}, {}]}];
//   return purchaseSerializerList(mock);
// };

//url: baseApi/purchasesUrl/{id}
export const getPurchase = async (id) => {
  const response = await get(`${PURCHASES_URL}${id}`);
  let mock = {commodity: [{}, {}, {}]};
  return purchaseSerializer(mock);
};

//url: baseApi/purchasesUrl/page/{page}/ + body = {filter}
export const getFilterPurchases = async (page, filter) => {
  const response = await post(`${PURCHASES_URL}page/${page}/`, {
    searchString: filter.searchString || '',
    stage: filter.STAGES_ID || '',
    date: filter.date || '',
    customerName: filter.name || '',
    ///...
  });
  let mock = [{commodity: [{}, {}, {}]}, {commodity: [{}, {}, {}]}, {commodity: [{}, {}, {}]}, {commodity: [{}, {}, {}]}];
  return purchaseSerializerList(mock);
};
