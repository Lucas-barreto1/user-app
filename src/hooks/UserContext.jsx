import { useState, useEffect, useContext, createContext } from "react";
import api from '../services/api';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [initialUsers, setInitialUsers] = useState([]);

    const searchingUsers = () => {
        api.get('users')
        .then(response => {setUsers(response.data.data); setInitialUsers(response.data.data)})
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    useEffect(() => {
        searchingUsers()
    }, [])

    return(
        <UserContext.Provider value={{
            users, 
            initialUsers, 
            setUsers, 
            setInitialUsers, 
            searchingUsers
            }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUsers(){
    const context = useContext(UserContext);
    return context;
}


export default UserProvider;