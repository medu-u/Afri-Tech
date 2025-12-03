import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";


// Named export
export const useAuth = () => {
  return useContext(AuthContext);
};
