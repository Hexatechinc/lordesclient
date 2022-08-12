import Home from './Home'
import Profile from './Profile'
import Notifications from './Notifications'
import Layout from '../components/layout'
import {Route, BrowserRouter as Router} from 'react-router-dom'

const Pages = () => {
    return(
        <Router>
                <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/notifications" component={Notifications} />
            </Layout>
        </Router>
    )
}

export default Pages
