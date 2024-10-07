import { Navigate } from 'react-router-dom';
const PrivateRoute = (props) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login" />;
    }
    return props.children;
}

export default PrivateRoute