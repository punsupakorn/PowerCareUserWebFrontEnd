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
  FollowUpScreen,
} from "./screens";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  // Switch,
  // Route,
  // BrowserRouter,
} from "react-router-dom";
import { AuthProvider } from "./Auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={UserProfileScreen} />
            {/* <Route path="/userprofile">
          <UserProfileScreen />
        </Route> */}
            <Route path="/otp" component={OTPScreen}></Route>
            <Route path="/menuhome" component={MenuHomeScreen}></Route>
            <Route path="/appointment" component={AppointmentScreen}></Route>
            <Route
              path="/appointmentconfirm"
              component={AppointmentConfirmScreen}
            ></Route>
            <Route path="/postpone" component={PostponeScreen}></Route>
            <Route
              path="/postponeselect"
              component={PostponeSelectScreen}
            ></Route>
            <Route
              path="/postponeconfirm"
              component={PostponeConfirmScreen}
            ></Route>
            <Route path="/cancel" component={CancelScreen}></Route>
            <Route
              path="/edituserprofile"
              component={EditUserProfileScreen}
            ></Route>
            <Route path="/followup" component={FollowUpScreen}></Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
