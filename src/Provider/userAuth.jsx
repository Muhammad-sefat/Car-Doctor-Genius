import { useContext } from "react";
import { AuthContext } from "../Conponents/AuthProvider";

const userAuth = () => {
  const user = useContext(AuthContext);
  return { user };
};

export default userAuth;
