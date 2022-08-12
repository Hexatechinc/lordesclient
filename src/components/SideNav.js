import {Link} from 'react-router-dom'
import {FaUserAlt, FaRegBell} from 'react-icons'

const SideNav = () => {
    return(
        <aside>
            <ul>
                <li>
                    <Link to="/profile">Profile <FaUserAlt /></Link>
                </li>
                <li>
                    <Link to="/notifications">Notifications <FaRegBell /></Link>
                </li>
            </ul>
        </aside>
    )
}

export default SideNav
