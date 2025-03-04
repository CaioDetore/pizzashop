import { setupWorker } from "msw/browser";

import { env } from "@/env";

import { approveOrderMock } from "./approve-order-mock";
import { cancelOrderMock } from "./cancel-order-mock";
import { deliverOrderMock } from "./deliver-order";
import { dispatchOrderMock } from "./dispatch-order";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period";
import { getDayOrdersAmountMock } from "./get-day-orders-amount";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount";
import { getMonthRevenueMock } from "./get-month-revenue";
import { getOrderDetailMock } from "./get-order-details-mock";
import { getOrdersMock } from "./get-orders-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { getProfileMock } from "./get-profile-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { signInMock } from "./sign-in.mock";
import { updateProfileMock } from "./update-profile-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
