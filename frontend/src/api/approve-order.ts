import { api } from "@/lib/axios";

export interface GetApproveOrderParams {
  orderId: string;
}

export async function approveOrder({ orderId }: GetApproveOrderParams) {
  const response = await api.patch(`/orders/${orderId}/approve`);

  return response.data;
}
