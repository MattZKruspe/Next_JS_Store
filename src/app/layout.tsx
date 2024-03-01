
import { Inter } from "next/font/google";
import { Header } from "app/components/Shared/Header";
import { Footer } from "app/components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          
          <Header />
            {children}</body>
          <Footer />
    </html>
  );
}
