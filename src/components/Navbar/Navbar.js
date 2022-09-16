import './Navbar.css'
import { LogOut } from '../LogOut/LogOut'

export const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <h2>R-STORE</h2>
                <LogOut />
            </div>
        </div>
    );
};
