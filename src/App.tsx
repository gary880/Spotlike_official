import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage, PrivacyPage, TermsPage } from './pages';
import './styles/global.css';
import './styles/layout.css';
import './styles/sections.css';
import './styles/pages.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
