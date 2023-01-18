import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FooterComponent from './Components/Footer/FooterComponent';
import HeaderComponent from './Components/Header/HeaderComponent';
import SpinnerComponent from './Components/Spinner/SpinnerComponent';

const HomeView = lazy(() => import('./Views/Home/HomeView'));
const AboutView = lazy(() => import('./Views/About/AboutView'));
const ContactView = lazy(() => import('./Views/Contact/ContactView'));
const ErrorView = lazy(() => import('./Views/Error/ErrorView'));

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Suspense fallback={<SpinnerComponent />}>
          <Routes>
            <Route path="/" element={<HomeView />} exact />
            <Route path="/about" element={<AboutView />} exact />
            <Route path="/contact" element={<ContactView />} exact />
            <Route path="*" element={<ErrorView />} exact />
          </Routes>
        </Suspense>

        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
