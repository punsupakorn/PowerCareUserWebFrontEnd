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
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./privateroute";

function App() {
  return (
    // <AuthProvider>
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={UserProfileScreen} />
          {/* <Route path="/userprofile">
          <UserProfileScreen />
        </Route> */}
          {/* <Route path="/otp" component={OTPScreen}></Route> */}
          <PrivateRoute
            path="/menuhome"
            component={MenuHomeScreen}
          ></PrivateRoute>
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
    </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;
