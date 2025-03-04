import { render } from "@testing-library/react";

import { OrderStatus } from "./order-status";

describe("order status", () => {
  // render result actions:
  // .find = retorna uma promise e procura se o elemento existe ou não
  // .get = procura se o elemento existe e da erro se não for encontrado
  // .query = procura se o elemento existe, porém não da erro se não for encontrado

  // pending
  it("should display the right text when order status is pending", () => {
    const wrapper = render(<OrderStatus status="pending" />);

    const statusText = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });

  // canceled
  it("should display the right text when order status is delivering", () => {
    const wrapper = render(<OrderStatus status="canceled" />);

    const statusText = wrapper.getByText("Cancelado");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });

  // processing
  it("should display the right text when order status is processing", () => {
    const wrapper = render(<OrderStatus status="processing" />);

    const statusText = wrapper.getByText("Em preparo");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });

  // delivering
  it("should display the right text when order status is delivering", () => {
    const wrapper = render(<OrderStatus status="delivering" />);

    const statusText = wrapper.getByText("Em entrega");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });

  // delivered
  it("should display the right text when order status is delivered", () => {
    const wrapper = render(<OrderStatus status="delivered" />);

    const statusText = wrapper.getByText("Entregue");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-500");
  });
});
