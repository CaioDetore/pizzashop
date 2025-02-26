import { api } from "@/lib/axios";

export interface GetDeliverOrderParams {
  orderId: string;
}

export async function deliverOrder({ orderId }: GetDeliverOrderParams) {
  const response = await api.patch(`/orders/${orderId}/deliver`);

  return response.data;
}
