import React, { useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContext';


function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("afritech_current_user")) || null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem("afritech_current_user", JSON.stringify(user));
  }, [user]);

  const register = (email, password) => {
    const users = JSON.parse(localStorage.getItem("afritech_users")) || [];
    if (users.find((u) => u.email === email)) {
      throw new Error("User already exists");
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("afritech_users", JSON.stringify(users));
    setUser({ email });
  };

  const signIn = (email, password) => {
    const users = JSON.parse(localStorage.getItem("afritech_users")) || [];
    const u = users.find((x) => x.email === email && x.password === password);
    if (!u) throw new Error("Invalid credentials");
    setUser({ email });
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, signIn, signOut, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
