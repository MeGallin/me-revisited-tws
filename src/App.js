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
const CvView = lazy(() => import('./Views/CV/CvView'));
const FormsView = lazy(() => import('./Views/Forms/FormsView'));

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Suspense fallback={<SpinnerComponent />}>
          <div className="content_height_adjuster">
            <Routes>
              <Route path="/" element={<HomeView />} exact />
              <Route path="/about" element={<AboutView />} exact />
              <Route path="/contact" element={<ContactView />} exact />
              <Route path="/cv" element={<CvView />} exact />
              <Route path="/forms" element={<FormsView />} exact />
              <Route path="*" element={<ErrorView />} exact />
            </Routes>
          </div>
        </Suspense>

        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
