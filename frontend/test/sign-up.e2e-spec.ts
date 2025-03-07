import { expect, test } from "@playwright/test";

test("sign up successfully", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Nome do estabelecimento" })
    .fill("Pizza Shop");
  await page.getByRole("textbox", { name: "Seu nome" }).fill("caio");
  await page.getByRole("textbox", { name: "Seu celular" }).fill("999999");
  await page
    .getByRole("textbox", { name: "Seu e-mail" })
    .fill("caiodetore@gmail.com");

  await page.getByRole("button", { name: "Acessar Painel" }).click();

  const toast = page.getByText("Restaurante cadastrado com sucesso");

  await expect(toast).toBeVisible();
});

test("sign up with error", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Nome do estabelecimento" })
    .fill("invalid Shop");
  await page.getByRole("textbox", { name: "Seu nome" }).fill("caio");
  await page.getByRole("textbox", { name: "Seu celular" }).fill("999999");
  await page
    .getByRole("textbox", { name: "Seu e-mail" })
    .fill("caiodetore@gmail.com");

  await page.getByRole("button", { name: "Acessar Painel" }).click();

  const toast = page.getByText("Erro ao cadastrar o restaurante.");

  await expect(toast).toBeVisible();
});

test("navigate to new login page", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Fazer login" }).click();

  expect(page.url()).toContain("/sign-in");
});
