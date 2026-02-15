import { Navbar } from '@/components/Navbar/Navbar';
import { NavbarFallback } from '@/components/Navbar/NavbarFallback';
import { Footer } from '@/components/Footer/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="App">
      <div className="edge-blur edge-blur-top" />
      <div className="edge-blur edge-blur-bottom" />
      <Navbar />
      <NavbarFallback />
      <div style={{ paddingTop: '52px' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
