import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FooterComponent from './Components/Footer/FooterComponent';
import HeaderComponent from './Components/Header/HeaderComponent';

const HomeView = lazy(() => import('./Views/Home/HomeView'));
const AboutView = lazy(() => import('./Views/About/AboutView'));
const ContactView = lazy(() => import('./Views/Contact/ContactView'));

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Suspense fallback={'...loading'}>
          <Routes>
            <Route path="/" element={<HomeView />} exact />
            <Route path="/about" element={<AboutView />} exact />
            <Route path="/contact" element={<ContactView />} exact />
          </Routes>
        </Suspense>

        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
