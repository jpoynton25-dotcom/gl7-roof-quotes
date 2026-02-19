import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Request from './pages/Request';
import HowItWorks from './pages/HowItWorks';
import Areas from './pages/Areas';
import FAQ from './pages/FAQ';
import RoofLeakHelp from './pages/RoofLeakHelp';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
// Village pages
import LechladeRoofRepairs from './pages/LechladeRoofRepairs';
import FairfordRoofRepairs from './pages/FairfordRoofRepairs';
import KempsfordRoofRepairs from './pages/KempsfordRoofRepairs';
import SouthropRoofRepairs from './pages/SouthropRoofRepairs';
import EastleachRoofRepairs from './pages/EastleachRoofRepairs';
import DownAmpneyRoofRepairs from './pages/DownAmpneyRoofRepairs';
import QueningtonRoofRepairs from './pages/QueningtonRoofRepairs';
import HatheropRoofRepairs from './pages/HatheropRoofRepairs';
import ColnStAldwynsRoofRepairs from './pages/ColnStAldwynsRoofRepairs';
import MeyseyHamptonRoofRepairs from './pages/MeyseyHamptonRoofRepairs';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/roof-leak-help" element={<RoofLeakHelp />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        {/* Village landing pages */}
        <Route path="/lechlade-roof-repairs" element={<LechladeRoofRepairs />} />
        <Route path="/fairford-roof-repairs" element={<FairfordRoofRepairs />} />
        <Route path="/kempsford-roof-repairs" element={<KempsfordRoofRepairs />} />
        <Route path="/southrop-roof-repairs" element={<SouthropRoofRepairs />} />
        <Route path="/eastleach-roof-repairs" element={<EastleachRoofRepairs />} />
        <Route path="/down-ampney-roof-repairs" element={<DownAmpneyRoofRepairs />} />
        <Route path="/quenington-roof-repairs" element={<QueningtonRoofRepairs />} />
        <Route path="/hatherop-roof-repairs" element={<HatheropRoofRepairs />} />
        <Route path="/coln-st-aldwyns-roof-repairs" element={<ColnStAldwynsRoofRepairs />} />
        <Route path="/meysey-hampton-roof-repairs" element={<MeyseyHamptonRoofRepairs />} />
      </Routes>
    </BrowserRouter>
  );
}
