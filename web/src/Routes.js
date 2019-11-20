import { BrowserRouter, Switch, Route } from '@hammerframework/web'
import HomePage from 'src/pages/HomePage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
