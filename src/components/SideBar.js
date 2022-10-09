import {Link} from 'react-router-dom'

const SideBar = () => {
    return (
        <aside className="w-1/5 h-screen fixed top-20 z-20 border-2 p-4">
            <ul>
                <li>
                    <Link to="/profile">profile</Link>
                </li>
                <li>
                    <Link to="/notifications">notifications</Link>
                </li>
                <li>
                    <Link to="/settings">settings</Link>
                </li>
            </ul>
        </aside>
    )
}


export default SideBar