import { purchaseSerializer } from "./purchaseSerializer";

export const purchaseSerializerList = (response) => {
    return {
      // ...response,
      response: response && response.length > 0 ? response.map((elem) => purchaseSerializer(elem)) : [],
    };
  };
  