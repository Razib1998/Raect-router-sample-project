import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className="flex gap-6 items-center justify-center text-2xl mt-6">
                <Link className="text-2xl" to = {'/'}>Home</Link>
                <Link to = {'/products'}>Products</Link>
                <Link to = {'/dashboard'}>Dashboard</Link>
            </nav>
        </div>
    );
};

export default Header;