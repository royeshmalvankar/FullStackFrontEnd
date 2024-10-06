import { Navigate } from 'react-router-dom';
const privateRoute = (props) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login" />;
    }
    return props.children;
}

export default privateRoute