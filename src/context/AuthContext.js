import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

// AuthContext 생성
export const AuthContext = createContext();

// AuthContextProvider 생성
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  // onAuthStateChanged를 통해 로그인 상태를 확인
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log("user", user);
    });

    // unmount될 때 unsub
    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
