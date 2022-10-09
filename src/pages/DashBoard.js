import Nav from '../components/Nav'
import SideBar from '../components/SideBar'


const DashBoard = () => {
    return(
        <main className="relative">
            <Nav />
            <main className="w-full relative top-20 grid grid-cols-4 gap-2 items-center justify-evenly px-5">
            <SideBar />
            <section className="col-start-2 col-end-5 border-2 p-2">
                {`This is your dashboard!`}
            </section>
            </main>
        </main>
    )
}


export default DashBoard