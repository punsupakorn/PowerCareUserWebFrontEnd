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
  PDPAScreen,
  ShowAppointment,

} from "./screens";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./privateroute";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
          {/* <AuthProvider> */}
          <Route
          exact path="/" 
              // path="/pdpa"
              component={PDPAScreen}
            ></Route>
          
            <Route exact path="/userprofile" component={UserProfileScreen} />
            {/* </AuthProvider> */}
            {/* <Route path="/userprofile">
          <UserProfileScreen />
        </Route> */}
            {/* <Route path="/otp" component={OTPScreen}></Route> */}
            <Route
              path="/menuhome"
              component={MenuHomeScreen}
            ></Route>
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
            <Route path="/showappointment" component={ShowAppointment}></Route>
            

          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
