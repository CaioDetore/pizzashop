import { expect, test } from "@playwright/test";

test("update profile successfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizza Shop" }).click();
  await page.getByRole("menuitem", { name: "Perfil da Loja" }).click();

  await page.getByRole("textbox", { name: "Nome" }).fill("Rocket Pizza");
  await page
    .getByRole("textbox", { name: "Descrição" })
    .fill("Another Description");

  await page.getByRole("button", { name: "Salvar" }).click();

  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Perfil atualizado com sucesso!");

  expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Close" }).click();

  const newButton = page.getByRole("button", { name: "Rocket Pizza" });

  await page.waitForTimeout(250);

  expect(newButton).toBeVisible();

  await page.waitForTimeout(2);
});
