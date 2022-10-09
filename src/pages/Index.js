import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Notifications from './Notifications'
import Market from './Market'
import Profile from './Profile'
import NotFound from './Notfound'
import {Routes, Route} from 'react-router-dom'




const Pages = () => {
    return (
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/market" element={<Market />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}


export default Pages