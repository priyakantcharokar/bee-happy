import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, Container } from "@mui/material";
import "@fontsource-variable/inter";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
// Charter and Kievit will use web fonts or system fallbacks
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
          <Container maxWidth="lg" sx={{ pt: 12, pb: 4 }}>
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
