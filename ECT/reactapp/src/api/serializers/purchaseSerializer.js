import { commoditySerializer } from "./commoditySerializer";
import { STAGES_ID, PURCHASE_TYPE } from "../../const";

export const purchaseSerializer = (response) => {
  return {
    // ...response,
    id: response.id || 0,
    number: response.number || "0888600001023000032",
    name: response.name || "Проведение лабораторных и инструментальных исследований и испытаний в рамках производственного контроля",
    customer: response.customer || "ООО “Рога и Копыта”",
    startCost: response.startCost || 650903.52,
    postingDate: response.postingDate || new Date(2023, 6, 8, 12, 0),
    dateOfAuction: response.dateOfAuction || new Date(2023, 9, 28, 10, 0),
    commodity: response.commodity && response.commodity?.length > 0 ? 
        response.commodity.map((elem) => commoditySerializer(elem)) : [],
    documents: response.documents || [],
    stage: response.stage || STAGES_ID.ONGOING,
    type: response.type || PURCHASE_TYPE.AUCTION,
  };
};
  