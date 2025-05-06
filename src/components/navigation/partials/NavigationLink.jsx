import {Link, useLocation} from "react-router-dom";

const NavigationLink = ({ link }) => {
    const { pathname } = useLocation();


    return (
        <>
            <Link
                className={`text-decoration-none ${pathname === link.href ? 'active-link' : ''}`}
                to={link.href}>
                {link.page}
            </Link>
        </>
    );
};

export default NavigationLink;