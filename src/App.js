import "./App.css";
import {
  AppointmentConfirmScreen,
  UserProfileScreen,
  OTPScreen,
  MenuHomeScreen,
  AppointmentScreen,
  PostponeScreen,
  PostponeSelectScreen,
  PostponeConfirmScreen,
  CancelScreen,
  EditUserProfileScreen,
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

        <Route path="/userprofile">
          <UserProfileScreen />
        </Route>
        <Route path="/otp">
          <OTPScreen />
        </Route>
        <Route path="/menuhome">
          <MenuHomeScreen />
        </Route>
        <Route path="/appointment">
          <AppointmentScreen />
        </Route>
        <Route path="/appointmentconfirm">
          <AppointmentConfirmScreen />
        </Route>
        <Route path="/postpone">
          <PostponeScreen />
        </Route>
        <Route path="/postponeselect">
          <PostponeSelectScreen />
        </Route>
        <Route path="/postponeconfirm">
          <PostponeConfirmScreen/>
        </Route>
        <Route path="/cancel">
          <CancelScreen/>
        </Route>
        <Route path="/edituserprofile">
          <EditUserProfileScreen/>
        </Route>
        
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;