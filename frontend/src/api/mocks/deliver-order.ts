import { http, HttpResponse } from "msw";

import { GetDeliverOrderParams } from "../deliver-order";

export const deliverOrderMock = http.patch<GetDeliverOrderParams, never, never>(
  "orders/:ordersId/deliver",
  async ({ params }) => {
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  },
);
