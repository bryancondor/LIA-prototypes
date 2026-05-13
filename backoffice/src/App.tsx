import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Adherence }     from './pages/Adherence'
import { Symptoms }      from './pages/Symptoms'
import { Escalations }   from './pages/Escalations'
import { Consultations } from './pages/Consultations'
import { Patients }      from './pages/Patients'
import { Onboarding }    from './pages/Onboarding'

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"              element={<Navigate to="/adherence" replace />} />
        <Route path="/adherence"     element={<Adherence />} />
        <Route path="/symptoms"      element={<Symptoms />} />
        <Route path="/escalations"   element={<Escalations />} />
        <Route path="/consultations" element={<Consultations />} />
        <Route path="/patients"      element={<Patients />} />
        <Route path="/onboarding"    element={<Onboarding />} />
      </Routes>
    </HashRouter>
  )
}
