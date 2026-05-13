import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Adherence }     from './pages/Adherence'
import { Symptoms }      from './pages/Symptoms'
import { Escalations }   from './pages/Escalations'
import { Consultations } from './pages/Consultations'
import { Patients }      from './pages/Patients'
import { Onboarding }    from './pages/Onboarding'
import { Reports }       from './pages/Reports'
import { Settings }      from './pages/Settings'

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
        <Route path="/reports"       element={<Reports />} />
        <Route path="/settings"      element={<Settings />} />
      </Routes>
    </HashRouter>
  )
}
