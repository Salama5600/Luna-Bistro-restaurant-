import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function PageEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const titles: Record<string, string> = {
      '/': 'Luna Bistro — Modern Mediterranean Bistro',
      '/about': 'Our Story — Luna Bistro',
      '/menu': 'Menu — Luna Bistro',
      '/gallery': 'Gallery — Luna Bistro',
      '/contact': 'Reservations & Contact — Luna Bistro',
    };

    document.title = titles[pathname] || 'Luna Bistro — Modern Mediterranean Bistro';
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <PageEffects />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:bg-background focus:p-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
