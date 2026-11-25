import { Playfair_Display, Quicksand } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from '@/components/Nav/nav';
import Footer from '@/components/footer/footer';
import BootstrapClient from '@/components/BootstrapClient/BootstrapClient';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-playfair',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});

export const metadata = {
  title: {
    default: 'CineTrip',
    template: 'CineTrip | %s',
  },
  description:
    'Descubra filmes e séries, veja onde assistir e acompanhe as novidades do cinema.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${quicksand.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
