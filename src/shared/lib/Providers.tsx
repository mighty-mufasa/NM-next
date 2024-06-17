"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Provider } from "react-redux";
import { store } from "@/shared/redux/store"
import { Toaster } from "sonner";

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
<<<<<<< HEAD
      defaultTheme="system"
=======
      defaultTheme="dark"
>>>>>>> 01bb2b1 (deploy)
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      <Provider store={store}>{children}</Provider>
    </NextThemesProvider>
  );
}
