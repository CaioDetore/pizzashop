import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";

import { ThemeProvider } from "./components/theme/theme-provider";
import { router } from "./routes";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzasho-theme" defaultTheme="dark">
        <Toaster richColors />
        <Helmet titleTemplate="%s | pizza.shop" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
