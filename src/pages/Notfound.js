import {Link} from 'react-router-dom'

const NotFound = () => {
    return(
        <main>
            <h1>Ops!</h1>
            <p>The page you were looking for seems to have been lost. Get back on <Link to="/">track</Link></p>
        </main>
    )
}


export default NotFound