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
  console.log(id);
  const response = await get(`${PURCHASES_URL}${id}`);
//   let mock = {id: id, stage: stage(Number(id)), commodity: [{id: 0}, {id: 1}, {id: 2}]};
  return purchaseSerializer(response);
};

//url: baseApi/purchasesUrl/page/{page}/ + body = {filter}
export const getFilterPurchases = async (page, filter) => {
//   const response = await post(`${MY_PURCHASES_URL}page/${page}/`, {
//     searchString: filter.searchString || '',
//     stage: filter.STAGES_ID || '',
//     date: filter.date || '',
//     customerName: filter.name || '',
//     ///...
//   });
//   let mock = [
//     {id: 1, stage: stage(1), commodity: [{}, {}, {}]}, 
//     {id: 2, stage: stage(2), commodity: [{}, {}, {}]}, 
//     {id: 0, stage: stage(0), commodity: [{}, {}, {}]}, 
//     {id: 3, stage: stage(3), commodity: [{}, {}, {}]}
//   ];

  const response = await get(`${PURCHASES_URL}`);
  return purchaseSerializerList(response);
};

//url: baseApi/purchasesUrl/page/{page}/ + body = {filter}
export const getMyFilterPurchases = async (page, filter) => {
//   const response = await post(`${PURCHASES_URL}page/${page}/`, {
//     searchString: filter.searchString || '',
//     stage: filter.STAGES_ID || '',
//     date: filter.date || '',
//     customerName: filter.name || '',
//     ///...
//   });
//   let mock = [
//     {id: 0, stage: stage(0), commodity: [{}, {}, {}]}, 
//     {id: 1, stage: stage(1), commodity: [{}, {}, {}]}
//   ];

  const response = await get(`${PURCHASES_URL}`);
  return purchaseSerializerList(response);
};

export const addNewPurchases = async (body) => {
  const response = await post(`${NEW_PURCHASES_URL}`, {
    name: body.name,
    customer: body.customer,
    startCost: body.startCost,
    postingDate: new Date(),
    dateOfAuction: body.dateOfAuction,
    commodity: body.commodity.map((elem) => { 
      return {
        okpd2: elem.okpd2,
        name: elem.name,
        unit: elem.unit,
        quantity: elem.quantity,
        price: elem.price,
        cost: elem.cost,
      }
    }),
    documents: body.documents,
    stage: body.stage,
    type: body.type,
  });
  return ({id: 1});
};
