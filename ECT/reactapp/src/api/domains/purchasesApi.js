import { PURCHASES_URL, STAGES_ID, MY_PURCHASES_URL } from '../../const.js';
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

const stage = (id) => {
  let res;
  switch (id) {
    case 0: res = STAGES_ID.ONGOING; break;
    case 1: res = STAGES_ID.WAITS; break;
    case 2: res = STAGES_ID.CANCELED; break;
    case 3: res = STAGES_ID.COMPLETED; break;
  }
  return res;
};


//url: baseApi/purchasesUrl/{id}
export const getPurchase = async (id) => {
  const response = await get(`${PURCHASES_URL}${id}`);
  let mock = {id: id, stage: stage(Number(id)), commodity: [{id: 0}, {id: 1}, {id: 2}]};
  return purchaseSerializer(mock);
};

//url: baseApi/purchasesUrl/page/{page}/ + body = {filter}
export const getFilterPurchases = async (page, filter) => {
  const response = await post(`${MY_PURCHASES_URL}page/${page}/`, {
    searchString: filter.searchString || '',
    stage: filter.STAGES_ID || '',
    date: filter.date || '',
    customerName: filter.name || '',
    ///...
  });
  let mock = [
    {id: 1, stage: stage(1), commodity: [{}, {}, {}]}, 
    {id: 2, stage: stage(2), commodity: [{}, {}, {}]}, 
    {id: 0, stage: stage(0), commodity: [{}, {}, {}]}, 
    {id: 3, stage: stage(3), commodity: [{}, {}, {}]}
  ];
  return purchaseSerializerList(mock);
};

//url: baseApi/purchasesUrl/page/{page}/ + body = {filter}
export const getMyFilterPurchases = async (page, filter) => {
  const response = await post(`${PURCHASES_URL}page/${page}/`, {
    searchString: filter.searchString || '',
    stage: filter.STAGES_ID || '',
    date: filter.date || '',
    customerName: filter.name || '',
    ///...
  });
  let mock = [
    {id: 0, stage: stage(0), commodity: [{}, {}, {}]}, 
    {id: 1, stage: stage(1), commodity: [{}, {}, {}]}
  ];
  return purchaseSerializerList(mock);
};
