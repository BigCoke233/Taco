"use client";

/**
 * 页面容器 & UI 提供器
 * 
 * @file providers.js
 * @exports Providers
 */

import { NextUIProvider } from "@nextui-org/system";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children}) {
  return (
    <main id="app">
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light">
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    </main>
  )
}