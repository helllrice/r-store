import './LogOut.css'
import { useNavigate } from 'react-router-dom'

export const LogOut = () => {
    const navigate = useNavigate();

    const logOut = () => {
        if (localStorage) {
            localStorage.removeItem("isLogedin");
            navigate("/auth", { replace: true });
        }
    };

    return (
        <button onClick={logOut} className="logout-btn">
            Выйти
        </button>
    );
};
