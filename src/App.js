import './App.css';
import FooterComponent from './Components/Footer/FooterComponent';
import HeaderComponent from './Components/Header/HeaderComponent';
import HomeView from './Views/Home/HomeView';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomeView />
      <FooterComponent />
    </div>
  );
}

export default App;
