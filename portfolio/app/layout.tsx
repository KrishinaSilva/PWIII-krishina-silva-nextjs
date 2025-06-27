// app/layout.tsx
import './globals.css'; // Importa seus estilos globais
import { Navbar } from './components/NavBar'; // Importa a Navbar para o layout

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar /> {/* A Navbar aparece em todas as páginas (neste caso, apenas a principal) */}
        {children} {/* O conteúdo de app/page.tsx será renderizado aqui */}
      </body>
    </html>
  );
}