import {Redirect, Route, Switch} from 'react-router-dom'
import { MainHeader } from './components/MainHeader';
import { ProductDetail } from './pages/ProductDetail';
import { Products } from './pages/Products';
import { Welcome } from './pages/Welcome';

function App() {
  return (
    <div>
      {/* By default react will render all paths that start with the same caracters, to avoid this you can use switch*/}
      <MainHeader/>
        <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"/> {/* if the user goes to the '/' path they'll be redirected to this new path */}
          </Route>
          <Route path="/welcome"> {/* the <Route> component must have the desired path as a parametter*/}
            <Welcome/>
          </Route>
          {/* the exact param tells react to only render this tag if the path required is  exaclty the same */}
          <Route path="/products" exact>
            <Products/>
          </Route>

          <Route path='/products/:prodId'>
            <ProductDetail/>
          </Route>
        </Switch>
        </main>
    </div>
  );
}

export default App;
