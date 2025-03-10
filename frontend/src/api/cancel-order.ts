import { api } from "@/lib/axios";

export interface GetCancelOrderParams {
  orderId: string;
}

export async function cancelOrder({ orderId }: GetCancelOrderParams) {
  const response = await api.patch(`/orders/${orderId}/cancel`);

  return response.data;
}
