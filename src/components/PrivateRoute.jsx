// import React from "react";
// import { Route, useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

//   return currentUser ? (
//     <Route {...rest}>{(props) => <Component {...props} />}</Route>
//   ) : (
//     navigate("/login")
//   );
// };

// export default PrivateRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
