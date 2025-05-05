import {Link} from "react-router-dom";
import './navigation.css'
import {navLinks} from "./partials/navLinks.js";
import NavigationLink from "./partials/NavigationLink.jsx";
import {Heart, Search} from "lucide-react";

const Navigation = () => {
    return (
        <>
            <nav>
                <div className="container-fluid d-flex justify-content-between algin-items-center p-3">
                    <div className="navigation-brand">
                        <Link
                            className="text-decoration-none fs-4 fw-bold"
                            to={'/'}
                        >
                            OpenMovie
                        </Link>
                    </div>
                    <div className="d-flex align-items-center gap-4 navigation-links">
                        {
                            navLinks.map(link => (
                                <NavigationLink
                                    link={link}
                                />
                            ))
                        }
                    </div>
                    <div className="d-flex align-items-center gap-2 navigation-actions">
                        <button className="btn">
                            <Search size={24} />
                        </button>
                        <button className="btn btn-outline-dark rounded rounded-3">
                            DarkMode Toggle
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;