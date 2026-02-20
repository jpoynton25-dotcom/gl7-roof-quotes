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
// Lechlade service pages
import LechladeRoofLeaks from './pages/LechladeRoofLeaks';
import LechladeChimneyRepairs from './pages/LechladeChimneyRepairs';
import LechladeGuttering from './pages/LechladeGuttering';
import LechladeFlatRoof from './pages/LechladeFlatRoof';
import LechladeStormDamage from './pages/LechladeStormDamage';
import LechladeRoofInspections from './pages/LechladeRoofInspections';
import LechladeRoofTiling from './pages/LechladeRoofTiling';
// Service pages
import RoofRepairsGL7 from './pages/services/RoofRepairsGL7';
import EmergencyRoofLeakGL7 from './pages/services/EmergencyRoofLeakGL7';
import RoofReplacementGL7 from './pages/services/RoofReplacementGL7';
import LeadFlashingRepairGL7 from './pages/services/LeadFlashingRepairGL7';
import ChimneyRepairsGL7 from './pages/services/ChimneyRepairsGL7';
import FlatRoofRepairGL7 from './pages/services/FlatRoofRepairGL7';
import ServicesHub from './pages/services/ServicesHub';
import StormDamageGL7 from './pages/services/StormDamageGL7';
import RidgeTileRepairGL7 from './pages/services/RidgeTileRepairGL7';
import ValleyRepairsGL7 from './pages/services/ValleyRepairsGL7';
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
        {/* Lechlade service pages */}
        <Route path="/lechlade-roof-leaks" element={<LechladeRoofLeaks />} />
        <Route path="/lechlade-chimney-repairs" element={<LechladeChimneyRepairs />} />
        <Route path="/lechlade-guttering" element={<LechladeGuttering />} />
        <Route path="/lechlade-flat-roof" element={<LechladeFlatRoof />} />
        <Route path="/lechlade-storm-damage" element={<LechladeStormDamage />} />
        <Route path="/lechlade-roof-inspections" element={<LechladeRoofInspections />} />
        <Route path="/lechlade-roof-tiling" element={<LechladeRoofTiling />} />
        {/* Other village pages */}
        <Route path="/fairford-roof-repairs" element={<FairfordRoofRepairs />} />
        {/* Service pages */}
        <Route path="/services" element={<ServicesHub />} />
        <Route path="/services/roof-repairs-gl7" element={<RoofRepairsGL7 />} />
        <Route path="/services/emergency-roof-leak-gl7" element={<EmergencyRoofLeakGL7 />} />
        <Route path="/services/roof-replacement-gl7" element={<RoofReplacementGL7 />} />
        <Route path="/services/lead-flashing-repair-gl7" element={<LeadFlashingRepairGL7 />} />
        <Route path="/services/chimney-repairs-gl7" element={<ChimneyRepairsGL7 />} />
        <Route path="/services/flat-roof-repair-gl7" element={<FlatRoofRepairGL7 />} />
        <Route path="/services/storm-damage-gl7" element={<StormDamageGL7 />} />
        <Route path="/services/ridge-tile-repair-gl7" element={<RidgeTileRepairGL7 />} />
        <Route path="/services/valley-repairs-gl7" element={<ValleyRepairsGL7 />} />
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
