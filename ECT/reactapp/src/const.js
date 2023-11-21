export const BASE_URL = 'https://localhost:7208/'
export const PURCHASES_URL = 'WeatherForecast/';

export const FILTERS_ID = {
  DATE: 'DATE',
  CUSTOMER_NAME: 'CUSTOMER_NAME',
  OKVED: 'OKVED',
  REGION: 'REGION',
  STAGE: 'STAGE',
};

export const STAGES_ID = {
  WAITS: 'WAITS',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
  ONGOING: 'ONGOING',
};

export const  TRANSLATED_STAGES = {
  [STAGES_ID.WAITS]: 'Ожидает проведения',
  [STAGES_ID.COMPLETED]: 'Закупка завершена',
  [STAGES_ID.CANCELED]: 'Закупка отменена',
  [STAGES_ID.ONGOING]: 'Идут торги',
};

export const FILTER_DATES_TYPE = {
  POSTING_DATE_START: 'POSTING_DATE_START',
  POSTING_DATE_FINISH: 'POSTING_DATE_FINISH',
  DATE_OF_AUCTION_START: 'DATE_OF_AUCTION_START',
  DATE_OF_AUCTION_FINISH: 'DATE_OF_AUCTION_START',
};
