import "./App.css";
import {
  AppointmentConfirmScreen,
  AppointmentScreen,
} from "./screens";
import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Switch>
        <Route path="/AppointmentConfirmScreen">
          <AppointmentConfirmScreen />
        </Route>
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;