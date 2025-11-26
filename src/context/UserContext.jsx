import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage on first mount
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedUser");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
