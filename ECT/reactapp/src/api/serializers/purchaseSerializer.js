import { commoditySerializer } from "./commoditySerializer";

export const purchaseSerializer = (response) => {
    return {
        // ...response,
        id: response.id || 1,
        number: response.number || "0123456789",
        name: response.name || "name of object purchase",
        customer: response.customer || "OOO 'Roga and Kopyta'",
        startCost: response.startCost || 1234567.00,
        postingDate: response.postingDate || new Date(2023, 9, 28, 12, 0),
        dateOfAuction: response.dateOfAuction || new Date(2023, 6, 10, 10, 0),
        commodity: response.commodity && response.commodity?.length > 0 ? 
            response.commodity.map((elem) => commoditySerializer(elem)) : [],
        documents: response.documents || [],
    };
};
  