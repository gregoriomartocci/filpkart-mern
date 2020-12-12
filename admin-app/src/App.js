import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { isUserLoggedIn } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import Products from "./containers/Products";
import Orders from "./containers/Orders";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  });

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home}></PrivateRoute>
        <PrivateRoute path="/products" exact component={Products}></PrivateRoute>
        <PrivateRoute path="/orders" exact component={Orders}></PrivateRoute>
  
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Switch>
    </div>
  );
}

export default App;
