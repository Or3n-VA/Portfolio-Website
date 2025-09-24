import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './app/router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import SkipToContent from './components/SkipToContent';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <SkipToContent />
        <Navbar />
        <main id="main-content">
          <AppRouter />
        </main>
        <Footer />
        <CommandPalette />
      </div>
    </HelmetProvider>
  );
}

export default App;