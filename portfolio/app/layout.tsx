import './globals.css';
import { Navbar } from './components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children} {/* O conteúdo de app/page.tsx */}
      </body>
    </html>
  );
}