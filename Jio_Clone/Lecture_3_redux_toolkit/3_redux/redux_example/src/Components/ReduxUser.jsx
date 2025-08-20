import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import fetchUserMiddleWare from '../redux/middleWare/fetchUserMiddleWare';

function ReduxUserComponent() {
    const {user, loading, error} = useSelector((store) => store.userSlice);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchUserMiddleWare());
    }, [])

    if(loading) {
        return <div>Loading.....</div>
    }
    if(error) {
        return <div>Error : {error.message}</div>
    }
    return (
        <div>
            <h2>User Id : {user.userId}</h2>
            <h2>Title : {user.title}</h2>
        </div>
    )
}

export default ReduxUserComponent