import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import NewTransaction from './pages/NewTransaction'
import EditTransaction from './pages/EditTransaction'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewTransaction} />
      <Route path="/edit/:id" component={EditTransaction} />
    </Switch>
  )
}
