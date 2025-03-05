import { http, HttpResponse } from "msw";

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "../get-order-details";

export const getOrderDetailMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    totalInCents: 1000,
    customer: {
      name: "Jonh doe",
      email: "jodasnd@jwqlkejqwe.com",
      phone: "999999999",
    },
    status: "pending",
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 1000,
        product: { name: "pzza" },
        quantity: 1,
      },
    ],
  });
});
