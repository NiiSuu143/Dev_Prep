import React, { useEffect, useState } from 'react'

function UserComponent() {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        
        async function getUser() {
            try {
                // fetch userData from api and set it to the state
                const userResp = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
                const userData = await userResp.json();
                setUser(userData);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        getUser();
    }, [])

    if(loading) {
        return <div>Loading.....</div>
    }
    if(error) {
        return <div>Error : {error.message}</div>
    }
    return (
        <div>
            <h2>UserId : {user.userId}</h2>
            <h2>Title : {user.title}</h2>
        </div>
    )
}

export default UserComponent