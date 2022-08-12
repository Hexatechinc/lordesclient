import Nav from './Navigation'
import SideNav from './SideNav'
import Footer from './Footer'


const Layout = ({children}) => {      
    return(
        <main className="w-screen flex flex-col justify-center">
            <Nav />
            <main>
                <SideNav />
            <section className="flex-auto w-4/5">{children}</section>
            </main>
            <Footer/>
        </main>
    )

}


export default Layout