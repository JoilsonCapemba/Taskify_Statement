import { createContext, ReactNode, useState } from "react";

interface UserContextType{
    user: string,
    setUser: (name: string)=>void
}

export const UserContext = createContext({} as UserContextType)

interface UserProviderProps{
    children: ReactNode
}

export function UserProvider({children}: UserProviderProps){
    const [user, setUser] = useState<string>('Alexa')
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}
