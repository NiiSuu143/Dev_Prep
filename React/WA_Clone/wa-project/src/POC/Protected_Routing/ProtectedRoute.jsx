
function ProtectedRoute(props) {
    const isloggedIn = props.isloggedIn;
    const children = props.children;
    if(isloggedIn) {
        return children
    } else {
        return <Navigate to="/login"></Navigate>
    }
}

export default ProtectedRoute