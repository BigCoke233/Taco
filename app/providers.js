"use client";

import { NextUIProvider } from "@nextui-org/system";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children}) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}