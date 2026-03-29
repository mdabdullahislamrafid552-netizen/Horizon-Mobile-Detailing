/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InteriorDetail from './pages/InteriorDetail';
import FullDetail from './pages/FullDetail';
import ExteriorDetail from './pages/ExteriorDetail';
import CeramicCoating from './pages/CeramicCoating';
import PaintCorrection from './pages/PaintCorrection';
import FleetServices from './pages/FleetServices';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/interior-detail" element={<InteriorDetail />} />
        <Route path="/services/full-detail" element={<FullDetail />} />
        <Route path="/services/exterior-detail" element={<ExteriorDetail />} />
        <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
        <Route path="/services/paint-correction" element={<PaintCorrection />} />
        <Route path="/services/fleet-services" element={<FleetServices />} />
      </Routes>
    </Router>
  );
}
