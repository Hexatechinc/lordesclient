import {useState} from 'react-helmet'
import {useQuery} from '@apollo/client'
import {FaHome, FaShoppingBag} from 'react-icons/fa'
import {Link, withRouter} from 'react-router-dom'


const Navigation = () => {
    const [signedIn, setSignedIn] = useState()

    const location = useLocation()
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <FaHome/> Home
                    </Link>
                </li>
                <li>
                    <Link to="/market">
                       <FaShoppingBag/> Market
                    </Link>
                </li>
                <li>
                    <Link to="/">SignIn</Link>
                </li>
                <li>
                    <Link to="/">SignUp</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation