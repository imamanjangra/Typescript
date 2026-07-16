import React, { createContext, useContext, useState } from "react";


export interface AuthContextType {
    user : string | null;
    isLoggedIn : boolean;
    login : (name : string) => void;
    logout : () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);


export default function AuthProvider ( {children} : {children : React.ReactNode} ) {
    const [user , setUser] = useState<string | null>(null);

    const isLoggedIn = user !== null;

    function login(name : string){
        setUser(name);
    }

    function logout(){
        setUser(null)
    }

    return(
        <AuthContext.Provider
        value={{
            user,
            isLoggedIn,
            login,
            logout
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}