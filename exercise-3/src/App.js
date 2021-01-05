
import CCMyKitchen from './ClassComponenets/CCMyKitchen';
import CCAddRecipe from './ClassComponenets/CCAddRecipe';
import CCAddIngredients from './ClassComponenets/CCAddIngredients';
import { Switch, withRouter, Route } from 'react-router-dom';
import FCHeader from './FunctionalComponents/FCHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <FCHeader/>
        <Switch>
            <Route path="/MyKitchen" >
                <CCMyKitchen />
            </Route>
            <Route path="/AddRecipe">
                <CCAddRecipe />
            </Route>
            <Route path="/AddIngredient">
                <CCAddIngredients />
            </Route>
        </Switch>
    </div>
  );
}

export default withRouter(App);
