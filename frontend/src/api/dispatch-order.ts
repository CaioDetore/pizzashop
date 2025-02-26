import { api } from "@/lib/axios";

export interface GetDispatchOrderParams {
  orderId: string;
}

export async function dispatchOrder({ orderId }: GetDispatchOrderParams) {
  const response = await api.patch(`/orders/${orderId}/dispatch`);

  return response.data;
}
