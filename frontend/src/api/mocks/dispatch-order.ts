import { http, HttpResponse } from "msw";

import { GetDispatchOrderParams } from "../dispatch-order";

export const dispatchOrderMock = http.patch<
  GetDispatchOrderParams,
  never,
  never
>("orders/:ordersId/dispatch", async ({ params }) => {
  if (params.orderId === "error-order-id") {
    return new HttpResponse(null, { status: 400 });
  }

  return new HttpResponse(null, { status: 204 });
});
