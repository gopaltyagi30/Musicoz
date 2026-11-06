import { createContext } from "react";

export const store = createContext();

export const AuthContext = ({children})=>{
    let user = "M hu giyaaaaaaaan";
return (<store.Provider value={user}>
    {children}
</store.Provider>
)
}