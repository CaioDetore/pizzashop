import { http, HttpResponse } from "msw";

import { GetMonthCanceledOrdersAmountResponse } from "../get-orders-canceled-amount";

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", () => {
  return HttpResponse.json({
    amount: 20,
    diffFromLastMonth: 6,
  });
});
