
import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {gql, useQuery, useApolloClient} from '@apollo/client'
import {isSignedInVar} from '../cache'
// import Button from './Button'



const IS_SIGNED_IN = gql`
    query IsUserSignedIn {
        isSignedIn @client
    }
`

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    const client = useApolloClient()
    const {data} = useQuery(IS_SIGNED_IN)

    let activeStyle = {
    textDecoration: "underline",
     };

     const handleSignOut = () => {
         client.cache.evict({fieldName: 'me'})
         client.cache.gc()

         localStorage.removeItem('token')

         isSignedInVar(false)
     }


    // let activeClassName = "underline";

    return data.isSignedIn ? (
        <nav className="">
            <ul className="">
                <li>
                    <NavLink 
                    style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                     to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink 
                    style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                     to="/market">Marketplace</NavLink>
                </li>
                <li>
                    <button
                    // isPrimary={true} 
                    // btnname="SignOut" 
                    onClick={handleSignOut}>
                        SignOut
                    </button>

                </li>
            </ul>
        </nav>
    ):(
        <nav className="">
            <ul className="">
                <li>
                    <NavLink 
                    style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                     to="/">Home</NavLink>
                </li>  
                 <li>
                    <NavLink 
                    style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                     to="/signin">SignIn</NavLink>
                </li>
                 <li>
                    <NavLink 
                    style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                     to="/signup">SignUp</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav