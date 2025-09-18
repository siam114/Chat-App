import { createContext, useContext, useState } from "react";
import { AuthContext } from './AuthContext';


export const ChatContext = createContext();

export const ChatProvider = ({children}) => {

    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [unseenMessages, setUnseenMessages] = useState({});

    const {socket, axios} = useContext(AuthContext);

    //function to get all users for sidebar
    const getUsers = async () =>{
        try {
            await axios.get("/api/messages/users")
        } catch (error) {
            
        }
    }

    const value = {}

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}