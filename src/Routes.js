import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NewTransaction from './pages/NewTransaction'
import EditTransaction from './pages/EditTransaction'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewTransaction />} />
      <Route path="/edit/:id" element={<EditTransaction />} />
    </Routes>
  )
}
