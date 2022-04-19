import React, { useContext, useEffect } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext, FirebaseContext } from "./store/Context";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import LevelCreation from "./components/LevelCreation";
import User from "./components/User";
import MissionVideo from "./components/missionVideo";
import Enroll from "./components/Enroll";
import Badge from "./components/Badge";
import Quotes from "./components/Quotes";
import Blogs from "./components/Blogs";
import Download from "./components/Download";
import sendNotify from "./components/sendNotify";
import Settings from "./components/Settings";
import signOut from "./components/signOut";
import Signup from "./components/Signup";
function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Navbar" component={Navbar} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/LevelCreation" component={LevelCreation} />
          <Route path="/User" component={User} />
          <Route path="/missionVideo" component={MissionVideo} />
          <Route path="/Enroll" component={Enroll} />
          <Route path="/Badge" component={Badge} />
          <Route path="/Quotes" component={Quotes} />
          <Route path="/Blogs" component={Blogs} />
          <Route path="/Download" component={Download} />
          <Route path="/sendNotify" component={sendNotify} />
          <Route path="/Settings" component={Settings} />
          <Route path="/Login" component={signOut} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
