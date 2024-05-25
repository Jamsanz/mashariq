import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages'
import { useLayoutEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { I18nextProvider } from 'react-i18next';
import i18next from './utils/i18next';

function App() {

  useLayoutEffect(() => {
    const initializeAOS = () => {
      AOS.init({
        easing: 'ease-out-cubic',
        once: false,
        offset: 150,
        duration: 1000,
        mirror: true,
      });
    };

    const timeoutId = setTimeout(() => {
      initializeAOS();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
