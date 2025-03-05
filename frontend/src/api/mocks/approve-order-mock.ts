import { http, HttpResponse } from "msw";

import { GetApproveOrderParams } from "../approve-order";

export const approveOrderMock = http.patch<GetApproveOrderParams, never, never>(
  "orders/:ordersId/approve",
  async ({ params }) => {
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  },
);
