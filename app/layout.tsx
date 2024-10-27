import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
   <body className={`${inter.className} antialiased`}>{children}</body>
   {/* By adding Inter to the <body> element, the font will be applied throughout your application*/}
    {/* antialiased -> 글꼴을 매끈하게 해주는 클래스*/}
    </html>
  );
}
