import { commoditySerializer } from "./commoditySerializer";
import { STAGES_ID, PURCHASE_TYPE } from "../../const";

export const purchaseSerializer = (response) => {
  return {
    // ...response,
    id: response.id || 0,
    number: response.number || "",
    name: response.name || "",
    customer: response.customer || "",
    startCost: response.startCost || 0.00,
    postingDate: response.postingDate || "",
    dateOfAuction: response.dateOfAuction || "",
    commodity: response.commodity && response.commodity?.length > 0 ? 
        response.commodity.map((elem) => commoditySerializer(elem)) : [],
    documents: response.documents || [],
    stage: response.stage || STAGES_ID.ONGOING,
    type: response.type || PURCHASE_TYPE.AUCTION,
  };
};
  