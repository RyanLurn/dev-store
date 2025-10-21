import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/providers/theme";

function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export { AppProviders };
