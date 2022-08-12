import {Link} from 'react-router-dom'
import {FaShoppingCart, FaWarehouse} from 'react-icons/fa'
import Footer from './Footer'
import Nav from './Navigation'

const MarketLayout = ({children}) => {
    return(
        <main>
            <Nav />
            <nav>
                <ul>
                    <li>
                        <Link to='/products'><FaWareHouse /> Products</Link>
                    </li>
                    <li>
                        <Link t0="/cart"><FaShoppingCart /> Cart</Link>
                    </li>
                    <li>
                        <Link><FaSearch /></Link>
                    </li>
                </ul>
            </nav>
            <section>{children}</section>
            <Footer />
        </main>
    )
}

export default MarketLayout