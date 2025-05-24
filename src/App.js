import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessPage from './pages/BusinessPage';
import CreatorPage from './pages/CreatorPage';
import MainPage from './pages/MainPage';
import PersonalPage from './pages/PersonalPage';
import BrandPage from './pages/BrandPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/creator" element={<CreatorPage />} />
          <Route path="/personalPage" element={<PersonalPage />} />
          <Route path="/brandPage" element={<BrandPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
