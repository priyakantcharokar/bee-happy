import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, Container } from "@mui/material";
import "@fontsource-variable/inter";
import "@fontsource-variable/playfair-display";
import Providers from "./providers";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import UiShell from "@/components/UiShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";


export const metadata: Metadata = {
  title: "GoSmiles | Climate-Positive Leisure Trips",
  description:
    "Book eco-conscious trips, farms, eco-destinations, voluntourism, and corporate retreats across India.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <UiShell>
                    <CssBaseline />
        <Providers>
          <TopNav />
          <Breadcrumbs />
          <Container maxWidth="lg" sx={{ py: 4 }}>
            {children}
          </Container>
          <Footer />
          <WhatsAppButton />
        </Providers>
          </UiShell>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
