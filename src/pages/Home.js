import {useState} from 'react'
import {useQuery} from '@apollo/client'
import {Helmet} from 'react-helmet'

//set the outlook of the homep age
//programatically based on the signin state.

const Home = () => {
    const [isSignedIn, setIsSignedIn] = useState()

    return(
            <main>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Lordes'</title>
                </Helmet>
                
                    <header>
                        This is the unsigned Home page
                    </header>
            </main>
    )
}


export default Home