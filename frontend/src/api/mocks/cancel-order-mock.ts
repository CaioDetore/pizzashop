import { http, HttpResponse } from "msw";

import { GetCancelOrderParams } from "../cancel-order";

export const cancelOrderMock = http.patch<GetCancelOrderParams, never, never>(
  "orders/:ordersId/cancel",
  async ({ params }) => {
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  },
);
