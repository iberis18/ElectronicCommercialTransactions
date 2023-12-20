import { Purchase } from '../../components/purchases/purchase/Purchase.jsx';
import { NEW_COMMODITY_URL } from '../../const.js';
import { get, put, post, postFile, del } from '../general/base.js';

export const addNewCommodity = async (purchaseId, body) => {
  const response = await post(`${NEW_COMMODITY_URL}${purchaseId}`, {
    name: body.name,
    okpd2: body.okpd2,
    unit: body.unit,
    quantity: body.quantity,
    price: body.price
  });
  return (response);
};
