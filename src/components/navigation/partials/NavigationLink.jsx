import {Link} from "react-router-dom";

const NavigationLink = ({ link }) => {
    return (
        <>
            <Link
                className="text-decoration-none"
                to={link.href}>
                {link.page}
            </Link>
        </>
    );
};

export default NavigationLink;