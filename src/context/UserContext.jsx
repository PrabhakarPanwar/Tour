import { assets, gallery, plans } from "../assets/image.js";
import { createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const obj = { assets, plans,gallery };

  return (
    <UserContext.Provider value={obj}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
