import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Home() {
    const {user} = useContext(UserContext)

    function capitalLetter(user) {
        const firstLetter = user.charAt(0).toUpperCase();
        const otherLetters = user.slice(1).toLowerCase();
        const formatName = firstLetter + otherLetters
        return formatName
    }

    return ( 
        <div>
            <h1>Welcome, {capitalLetter( user || 'guest')}! </h1>
        </div>
     );
}

export default Home;