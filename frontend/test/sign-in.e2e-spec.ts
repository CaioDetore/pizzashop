import { expect, test } from "@playwright/test";

test("sign in successfully", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Seu e-mail" })
    .fill("caiodetore@gmail.com");
  await page.getByRole("button", { name: "Acessar Painel" }).click();

  const toast = page.getByText(
    "Enviamos um link de autenticação para seu e-mail",
  );

  expect(toast).toBeVisible();

  await page.waitForTimeout(2);
});

test("sign in with wrong credentials", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Seu e-mail" })
    .fill("caiodetore@wrong.com");
  await page.getByRole("button", { name: "Acessar Painel" }).click();

  const toast = page.getByText("Credenciais inválidas");

  expect(toast).toBeVisible();

  await page.waitForTimeout(2);
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Novo estabelecimento" }).click();

  expect(page.url()).toContain("/sign-up");

  await page.waitForTimeout(2);
});
